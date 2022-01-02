import { compress, dateOnlyString } from './utility';
import { Customer } from './entities/customer';
import { Product } from './entities/product';
import { Inventory } from './entities/inventory';
import { Sell } from './entities/sell';
import { User } from './entities/user';
import { Settings } from './entities/settings';
import { SelledProduct } from './entities/selled-product';
import { Payment } from './entities/payment';
import { Brand } from './entities/brand';
import { Size } from './entities/size';
import { Color } from './entities/color';
import { Category } from './entities/category';
import { SubCategory } from './entities/sub-category';

// const connection = getConnection();
export let Entities = [
  Customer,
  Payment,
  Product,
  Inventory,
  Sell,
  User,
  Settings,
  SelledProduct,
  Color,
  Brand,
  Size,
  Category,
  SubCategory
];

export async function customer(connection, action: string, data?: any) {
  const repository = connection.getRepository(Customer);
  let cust;
  switch (action) {
    case 'create':
      data.photo = data.photo && (await compress(data.photo, 500, 500));
      cust = repository.save(data);
      return cust;

    case 'update':
      const customer = await repository.findOne(data.id);
      customer.name = data.name || customer.name;
      customer.phone = data.phone || customer.phone;
      customer.gender = data.gender || customer.gender;
      customer.address = data.address || customer.address;
      if (data.hasOwnProperty('photo')) customer.photo = data.photo;
      cust = await repository.save(customer);

      return cust;

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}

export async function inventory(connection, action: string, data?: any) {
  const inventoryRepository = connection.getRepository(Inventory);
  const productRepository = connection.getRepository(Product);
  let inventory: Inventory;

  switch (action) {
    case 'create':
      inventory = new Inventory();
      inventory.item = await productRepository.findOne(data.item);
      inventory.quantity = data.quantity;
      inventory.amount = data.amount;
      inventory.date = data.date;

      return inventoryRepository.save(inventory);

    case 'update':
      inventory = await inventoryRepository.findOne(data.id);
      inventory.item = await productRepository.findOne(data.item);
      inventory.quantity = data.quantity;
      inventory.amount = data.amount;
      inventory.date = data.date || inventory.date;

      return inventoryRepository.save(inventory);

    case 'fetch':
      return inventoryRepository.find();

    case 'delete':
      return inventoryRepository.remove(data);
  }
}

export async function product(connection, action: string, data?: any) {
  const productRepository = connection.getRepository(Product);
  const brandRepository = connection.getRepository(Brand);
  const colorRepository = connection.getRepository(Color);
  const sizeRepository = connection.getRepository(Size);
  const categoryRepository = connection.getRepository(Category);
  const subCategoryRepository = connection.getRepository(SubCategory);

  switch (action) {
    case 'create':
    case 'update':
      let colors: Color[] = [];
      let sizes: Size[] = [];
      let product: Product;
      data.colors && data.colors.forEach(async id => colors.push(await colorRepository.findOne(id)));
      data.sizes && data.sizes.forEach(async id => sizes.push(await sizeRepository.findOne(id)));
      
      if(action === 'update'){
        product = await productRepository.findOne(data.id)
      }else {
        product = new Product();
      }
       new Product();
      product.name = data.name;
      product.description = data.description;
      product.brand = data.brand;
      product.discountInPercent = data.discountInPercent;
      product.discountInRuppee = data.discountInRuppee;
      product.stock = data.stock;
      product.colors = (colors.length > 0) ? colors: null ;
      product.sizes = (sizes.length > 0) ? sizes: null;
      product.brand = await brandRepository.findOne(data.brand);
      product.category = await categoryRepository.findOne(data.category);
      product.subCategory = await subCategoryRepository.findOne(data.subCategory);
      product.sellBy = data.sellBy;
      product.length = data.length;
      product.price = data.price;
      product.productCode = data.productCode;
      product.price = data.price;
      product.unit = data.unit;
      product.image = data.image && (await compress(data.image, 500, 500));

      return productRepository.save(product);
     

    case 'fetch':
      return productRepository.find();

    case 'delete':
      return productRepository.remove(data);
  }
}

export async function sell(connection, action: string, data?: any) {
  const repository = connection.getRepository(Sell);

  switch (action) {
    case 'create':
      const productRepository = connection.getRepository(Product);
      const customerRepository = connection.getRepository(Customer);
      const selledProducts: SelledProduct[] = [];
      const payment: Payment = new Payment();
      const sell = new Sell();

      //Create first payment
      if (data.receivedAmount) {
        payment.amount = data.receivedAmount;
        payment.description = data.description;
        payment.paymentMode = data.paymentMode;
        sell.payments = []
        sell.payments.push(payment)
      }

      //Create a new sell record.
      sell.customer = await customerRepository.findOne(data.customer.id);
      sell.receiptNumber = data.receiptNumber;
      sell.discount = data.discount;
      sell.finalPayableAmount = data.finalPayableAmount;
      sell.receivedAmount = data.receivedAmount;
      sell.paymentMode = data.paymentMode;
      sell.lastPaymentDate = new Date();
      sell.selledProducts = selledProducts;

      const items = data.cartItem;
      //Creating selled products and linking with sell object.
      for (let i = 0; i < items.length; i++) {
        const product = await productRepository.findOne(items[i].id);
        product.stock = product.stock - items[i].quantity;
        await productRepository.save(product);
        //Create a new selled product for each item
        const selledproduct = new SelledProduct();
        selledproduct.sell = sell;
        selledproduct.item = product;
        selledproduct.quantity = items[i].quantity;
        selledproduct.price = product.price;
        selledproduct.fixedDiscount = product.discountInPercent || 0;
        selledproduct.specialDiscount = items[i].specialDiscount;

        selledProducts.push(selledproduct);
      }

      return repository.save(sell);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find({ relations: ['customer'] });

    case 'delete':
      return repository.remove(data);
  }
}

export async function payment(connection, action: string, data?: any) {
  const paymentRepository = connection.getRepository(Payment);
  const sellRepository = connection.getRepository(Sell);

  const payment = new Payment();

  switch (action) {
    case 'create':
      const sell = await sellRepository.findOne(data.sellId);
      sell.receivedAmount += +data.amount;
      sell.payments.push(payment);
      payment.amount = data.amount;
      payment.description = data.description;
      payment.paymentMode = data.paymentMode;

      // await paymentRepository.save(payment);
      return sellRepository.save(sell);

    case 'fetch':
      return paymentRepository.find({ sellId: data.sellId });
  }
}

export async function user(connection, action: string, data?: any) {
  const repository = connection.getRepository(User);
  const user = new User();

  switch (action) {
    case 'create':
      return repository.save(data);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}

export async function settings(connection, action: string, data?: any) {
  const repository = connection.getRepository(Settings);

  switch (action) {
    case 'create':
      return repository.save(data);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}



export async function brand(connection, action: string, data?: any) {
  const repository = connection.getRepository(Brand);

  switch (action) {
    case 'create':
      return repository.save(data);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}



export async function color(connection, action: string, data?: any) {
  const repository = connection.getRepository(Color);

  switch (action) {
    case 'create':
      return repository.save(data);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}


export async function size(connection, action: string, data?: any) {
  const repository = connection.getRepository(Size);

  switch (action) {
    case 'create':
      return repository.save(data);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}


export async function category(connection, action: string, data?: any) {
  const categoryRepository = connection.getRepository(Category);
  const subcategoryRepository = connection.getRepository(SubCategory);

  switch (action) {
    case 'create':
      return categoryRepository.save(data);

    case 'update':
      const category = await categoryRepository.findOne( data.id );
      if(!category) throw new Error('Invalid category id');
      category.name = data.name;
      category.image = data.image;

      return categoryRepository.save(category);

    case 'fetch':
      return categoryRepository.find(data);

    case 'delete':
      return categoryRepository.remove(data);
  }
}


export async function subCategory(connection, action: string, data?: any) {
  const repository = connection.getRepository(SubCategory);
  const categoryRepository = connection.getRepository(Category);

  switch (action) {
    case 'create':
      data.category = await categoryRepository.findOne(data.categoryId);
      return repository.save(data);

    case 'update':
      const id = data.id;
      delete data.id;
      return repository.update(id, data);

    case 'fetch':
      return repository.find(data);

    case 'delete':
      return repository.remove(data);
  }
}


/**
 * Fetch all the data related to the selled category
 * @param connection Connection to data
 */
export async function dashboard(connection, range) {
  const categoryRepository = connection.getRepository(Category);
  const customerRepository = connection.getRepository(Customer);

  let where = 'true';
  const data = {
    category,
    customer
  };
  
    if(Array.isArray(range)){
      let startDate = dateOnlyString(range[0]);
      let endDate = dateOnlyString(range[1]);
      where = `(date(sell.selledDate) BETWEEN '${startDate}' AND  '${endDate}')`;
    }
    let query = `
    SELECT
      sum(inner.count) as selledProductCount,
      sum(ifnull(inner.productCount, 0)) as productCount,
      inner.name as name
    FROM 
      (SELECT 
        sum(ifnull(sp.id, 0)) as count,
        sum(ifnull(p.stock, 0)) as productCount,
        c.name as name,
        c.id as categoryId,
        p.id as productId
      FROM category c
        LEFT JOIN product p ON p.categoryId = c.id
        LEFT JOIN selled_product sp ON sp.itemId = p.id
      GROUP BY c.id,c.name, p.id) as inner
    GROUP BY inner.categoryId, inner.name
    `;
    data.category = await categoryRepository.query(query);

    query = `
    SELECT 
      sum(sell.finalPayableAmount - sell.receivedAmount) as dueAmount,
      c.name as name
    FROM sell
      INNER JOIN customer c ON sell.customerId = c.id
    where ${where} AND (sell.finalPayableAmount - sell.receivedAmount) > 0
    GROUP BY c.name
    `;

    data.customer = await customerRepository.query(query);
    console.log('aaaaaaaaa------------------',data);
    return data;      
}