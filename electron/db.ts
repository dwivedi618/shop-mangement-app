import { Customer } from './entities/customer'
import { Product } from './entities/product'
import { Inventory } from './entities/inventory'
import { Sell } from './entities/sell'
import { User } from './entities/user';
import { Settings } from './entities/settings';
import { SelledProduct } from './entities/selled-product';
import { compress } from './utility';

// const connection = getConnection();

export async function customer(connection, action: string, data?: any) {
    const repository = connection.getRepository(Customer);
    let cust;
    switch (action) {
        case 'create':
            data.photo = data.photo && await compress(data.photo, 500, 500);
            cust = repository.save(data);
            return cust;

        case 'update':
            const customer = await repository.findOne(data.id);
            customer.name = data.name || customer.name;
            customer.phone = data.phone || customer.phone;
            customer.gender = data.gender || customer.gender;
            customer.address = data.address || customer.address;
            customer.photo = data.photo && await compress(data.photo, 500, 500) || customer.photo;
            cust = await repository.save(customer);
            console.log('cuuuuussssssssttttttt', cust );
            
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
            inventory.item = await productRepository.findOne(data.item)
            inventory.quantity = data.quantity;
            inventory.amount = data.amount;
            inventory.date = data.date;

            return inventoryRepository.save(inventory);

        case 'update':
            inventory = await inventoryRepository.findOne(data.id);
            inventory.item = await productRepository.findOne(data.item)
            inventory.quantity = data.quantity;
            inventory.amount = data.amount;
            inventory.date = data.date || inventory.date;

            return inventoryRepository.save(inventory);

        case 'fetch':
            return inventoryRepository.find({ relations: ["item"] });

        case 'delete':
            return inventoryRepository.remove(data);

        
    }

}


export async function product(connection, action: string, data?: any) {

    const repository = connection.getRepository(Product);

    switch (action) {
        case 'create':
            const product = new Product();
            product.name = data.name;
            product.description = data.description;
            product.brand = data.brand;
            product.discountInPercent = data.discountInPercent;
            product.discountInRuppee = data.discountInRuppee;
            product.grade = data.grade;
            product.make = data.make;
            product.sellBy = data.sellBy;
            product.length = data.length;
            product.price = data.price;
            product.productCode = data.productCode;
            product.size = data.size;
            product.price = data.price;
            product.unit = data.unit;
            product.image = data.image && await compress(data.image, 500, 500);

            return repository.save(product);

        case 'update':
            const id = data.id;
            delete data.id;
            data.image = data.image && await compress(data.image, 500, 500);
            return repository.update(id, data);

        case 'fetch':
            return repository.find(data);

        case 'delete':
            return repository.remove(data);

        
    }

}


export async function sell(connection, action: string, data?: any) {
    const repository = connection.getRepository(Sell);

    switch (action) {
        case 'create':
            console.log('Inside create--------->>>>>>>>>>', data);
            const productRepository = connection.getRepository(Product);
            const customerRepository = connection.getRepository(Customer);
            const selledProducts: SelledProduct[] = [];
            
            //Create a new sell record.
            const sell = new Sell();
            sell.customer = await customerRepository.findOne(data.customer.id);
            sell.receiptNumber = data.receiptNumber;
            sell.discount = data.discount;
            sell.receivedAmount = data.receivedAmount;
            sell.paymentMode = data.paymentMode;
            sell.lastPaymentDate = new Date();
            // sell.selledProducts = selledProducts;
            
            const items = data.cartItem;
            //Creating selled products and linking with sell object.
            for (let i = 0; i < items.length; i++) {
                const product = await productRepository.findOne(items[i].id )
                
                //Create a new selled product for each item
                const selledproduct = new SelledProduct();
                selledproduct.sell = sell; 
                selledproduct.item = product;
                selledproduct.quantity = items[i].quantity;
                selledproduct.price = product.price;
                selledproduct.fixedDiscount = product.discountInPercent;
                selledproduct.specialDiscount = items[i].specialDiscount;

                selledProducts.push(selledproduct);
            
                console.log('sellllllllllllllllllllllllllllllllll----------', selledproduct);
            }

            
            return repository.save(sell);

        case 'update':
            const id = data.id;
            delete data.id;
            return repository.update(id, data);

        case 'fetch':
            return repository.find({ relations: ["selledProducts", "customer"] });

        case 'delete':
            return repository.remove(data);

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
    const settings = new Settings();

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