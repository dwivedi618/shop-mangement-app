import { Customer } from './entities/customer'
import { Product } from './entities/product'
import { Inventory } from './entities/inventory'
import { Sell } from './entities/sell'
import { User } from './entities/user';
import { Settings } from './entities/settings';
import { SelledProduct } from './entities/selled-product';
import { compress } from './utility';
import { In } from 'typeorm';
import { InventoryHistory } from 'entities/inventoryHistory';

// const connection = getConnection();

export async function customer(connection, action: string, data?: any) {
    const repository = connection.getRepository(Customer);
    const customer = new Customer();

    switch (action) {
        case 'create':
            data.photo = data.photo && await compress(data.photo, 500, 500);
            return await repository.save(data);

        case 'update':
            const id = data.id;
            delete data.id;
            data.photo = data.photo && await compress(data.photo, 500, 500);
            return await repository.update(id, data);

        case 'fetch':
            return await repository.find(data);

        case 'delete':
            return await repository.remove(data);

        default:
            console.log('This is the default option')
    }
}

export async function inventory(connection, action: string, data?: any) {
    const repository = connection.getRepository(Inventory);


    switch (action) {
        case 'create':
            return await repository.save(data);

        case 'update':
            const id = data.id;
            const inventory = await repository.findOne(id)
            delete data.id;
            if (data.isAddingStock == 'true') {
                inventory.itemInStock += (+data.quantity);
                inventory.totalStockPrice += (+data.quantity) * (+data.pricePerItem);
            }
            if (data.isAddingStock == 'false') {
                inventory.itemInStock -= (+data.quantity);
                inventory.totalStockPrice -= (+data.quantity) * (+data.pricePerItem);

            }


            // Object.keys(data).forEach(key => inventory[key] = data[key]);
            console.log('data debuggggg', data, "deubgg inventory", inventory)
            return await repository.update(id, inventory);

        case 'fetch':
            return await repository.find({ relations: ["item"] });

        case 'delete':
            return await repository.remove(data);

        default:
            console.log('This is the default option')
    }

}


export async function product(connection, action: string, data?: any) {

    const repository = connection.getRepository(Product);

    switch (action) {
        case 'create':
            const product = new Product();
            const inventory = new Inventory();
            product.name = data.name;
            product.description = data.description;
            product.brand = data.brand;
            product.discountInPercent = data.discountInPercent;
            product.discountInRuppee = data.discountInRuppee;
            product.grade = data.grade;
            product.make = data.make;
            product.isSellByMeter = data.isSellByMeter;
            product.length = data.length;
            product.price = data.price;
            product.productCode = data.productCode;
            product.size = data.size;
            product.salePrice = data.salePrice;
            product.unit = data.unit;
            product.inventory = inventory;
            product.file = data.file && await compress(data.file, 500, 500);

            return await repository.save(product);

        case 'update':
            const id = data.id;
            delete data.id;
            data.file = data.file && await compress(data.file, 500, 500);
            return await repository.update(id, data);

        case 'fetch':
            return await repository.find(data);

        case 'delete':
            return await repository.remove(data);

        default:
            console.log('This is the default option')
    }

}


export async function sell(connection, action: string, data?: any) {

    const repository = connection.getRepository(Sell);

    switch (action) {
        case 'create':
            const inventoryRepository = connection.getRepository(Inventory);
            const productRepository = connection.getRepository(Product);
            const historyRepository = connection.getRepository(InventoryHistory);
            const customerRepository = connection.getRepository(Customer);
            const selledProducts: SelledProduct[] = [];
            const inventories: Inventory[] = [];
            const histories: InventoryHistory[] = [];
            
            //Create a new sell record.
            const sell = new Sell();
            sell.customer = customerRepository.findOne(data.customer.id);
            sell.receiptNumber = data.receiptNumber;
            sell.discountInPercent = data.discountInPercent;
            sell.discountInRuppee = data.discountInRuppee;
            sell.cartAmount = data.cartAmount;
            sell.finalPayableAmount = data.finalPayableAmount;
            sell.receivedAmount = data.receivedAmount;
            sell.paymentMode = data.paymentMode;
            sell.selledProducts = selledProducts;
            
            const items = data.cartItem;
            //Creating selled products and linking with sell object.
            for (let i = 0; i < items.length; i++) {
                const product = await productRepository.findOne(items[i].id )
                
                //Create a new selled product for each item
                const selledproduct = new SelledProduct();
                selledproduct.name = items[i].item.name;
                selledproduct.brand = items[i].item.brand;
                selledproduct.grade = items[i].item.grade;
                selledproduct.make = items[i].item.make;
                selledproduct.isSellByMeter = items[i].item.isSellByMeter;
                selledproduct.productCode = items[i].item.productCode;
                selledproduct.description = items[i].item.description;
                selledproduct.discountInPercent = items[i].item.discountInPercent;
                selledproduct.discountInRuppee = items[i].item.discountInRuppee;
                selledproduct.length = items[i].item.length;
                selledproduct.price = items[i].item.price;
                selledproduct.salePrice = items[i].item.salePrice;
                selledproduct.size = items[i].item.size;
                selledproduct.unit = items[i].item.unit;
                selledproduct.quantity = items[i].quantity;
                selledproduct.item = product;   //Linking with product
                // selledproduct.sell = sell;   //Linking with sell object
                selledProducts.push(selledproduct);
                
                //Mantain the available item in stock
                const inventory = await inventoryRepository.findOne({ where: { itemId: items[i].id }});
                inventory.itemInStock -= (+items[i].quantity);                
                inventories.push(inventory);
                
                //Create history for the stock change
                let history = new InventoryHistory();
                history.amount = (+items[i].quantity);
                history.date = new Date();
                histories.push( history );
                

            }

            let sellDetail = await repository.save(sell);
            inventories.forEach(async inventory => await inventoryRepository.save( inventory ));
            histories.forEach(async history => await historyRepository.save( history ));
            return sellDetail;

        case 'update':
            const id = data.id;
            // delete data.id;
            return await repository.update(id, data);

        case 'fetch':
            return await repository.find({ relations: ["selledProducts", "customer"] });

        case 'delete':
            return await repository.remove(data);

        default:
            console.log('This is the default option')
    }

}

export async function user(connection, action: string, data?: any) {

    const repository = connection.getRepository(User);
    const user = new User();

    switch (action) {
        case 'create':
            return await repository.save(data);

        case 'update':
            const id = data.id;
            delete data.id;
            return await repository.update(id, data);

        case 'fetch':
            return await repository.find(data);

        case 'delete':
            return await repository.remove(data);

        default:
            console.log('This is the default option')
    }

}

export async function settings(connection, action: string, data?: any) {

    const repository = connection.getRepository(Settings);
    const settings = new Settings();

    switch (action) {
        case 'create':
            return await repository.save(data);

        case 'update':
            const id = data.id;
            delete data.id;
            return await repository.update(id, data);

        case 'fetch':
            return await repository.find(data);

        case 'delete':
            return await repository.remove(data);

        default:
            console.log('This is the default option')
    }

}