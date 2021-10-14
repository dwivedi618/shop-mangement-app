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
    const repository = connection.getRepository( Customer );
    const customer = new Customer(); 

    switch( action ) {
        case 'create':
            data.photo = data.photo && await compress(data.photo, 500, 500);
            return await repository.save( data );

        case 'update':
            const id = data.id;
            delete data.id;
            data.photo = data.photo && await compress(data.photo, 500, 500);
            return await repository.update( id, data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }
}

export async function inventory(connection, action: string, data?: any) {
    const repository = connection.getRepository( Inventory );
    

    switch( action ) {
        case 'create':
            return await repository.save( data );
            
        case 'update':
            const id = data.id;
            const inventory = await repository.findOne(id)
            delete data.id;
            if (data.isAddingStock == true) inventory.itemInStock += data.quantity;
            if (data.isAddingStock == false) inventory.itemInStock -= data.quantity;
            inventory.totalStockPrice = inventory.itemInStock * data.pricePerItem;


            Object.keys(data).forEach(key => inventory[key] = data[key]);
            console.log('data debuggggg',data,"deubgg inventory",inventory)
            return await repository.update( id, inventory );

        case 'fetch':
            return await repository.find( { relations: ["item"] } );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}


export async function product( connection, action: string, data?: any ) {

    const repository = connection.getRepository( Product );

    switch( action ) {
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

            return await repository.save( product );
            
        case 'update':
            const id = data.id;
            delete data.id;
            data.file = data.file && await compress(data.file, 500, 500);
            return await repository.update( id, data );

        case 'fetch':
            return await repository.find( data);

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}


export async function sell(connection, action: string, data?: any) {

    const repository = connection.getRepository( Sell );
    
    switch( action ) {
        case 'create':
            const sell = new Sell();
            const selledProducts: SelledProduct [] = [];
            
            //Setting keys of sell object.
            sell.currentCustomer = await connection.getRepository(Customer).findOne( data.customer.id);
            sell.receiptNumber = data.receiptNumber;
            sell.discountInPercent = data.discountInPercent;
            sell.discountInRuppee = data.discountInRuppee;
            sell.cartAmount = data.cartAmount;
            sell.finalPayableAmount = data.finalPayableAmount;
            sell.receivedAmount = data.receivedAmount;
            sell.paymentMode = data.paymentMode;
            
            const items = data.cartItem;
            //Creating selled products and linking with sell object.
            for(let i = 0; i < items.length; i++) {
                const selledproduct = new SelledProduct();
                selledproduct.sell = sell;   //Linking with sell object

                selledproduct.brand = items[i].brand;
                selledproduct.grade = items[i].grade;
                selledproduct.make = items[i].make;
                selledproduct.isSellByMeter = items[i].isSellByMeter;
                selledproduct.productCode = items[i].productCode;
                selledproduct.description = items[i].description;

                selledproduct.item = await connection.getRepository(Product).find({ where: { id: items[i].id } } );
                selledproduct.discountInPercent = items[i].discountInPercent;
                selledproduct.discountInRuppee = items[i].discountInRuppee;
                selledproduct.length = items[i].length;
                selledproduct.price = items[i].price;
                selledproduct.salePrice = items[i].salePrice;
                selledproduct.size = items[i].size;
                selledproduct.unit = items[i].unit;
                selledproduct.quantity = items[i].quantity;

                selledProducts.push(selledproduct);
            }

            sell.selledProducts = selledProducts;
            console.log(sell,'seee-------------', selledProducts, '--------', data);
            return await repository.save( sell );
            
        case 'update':
            const id = data.id;
            delete data.id;
            return await repository.update( id, data );

        case 'fetch':
            return await repository.find({ relations: ["selledProducts"] });

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}

export async function user(connection, action: string, data?: any) {

    const repository = connection.getRepository( User );
    const user = new User(); 

    switch( action ) {
        case 'create':
            return await repository.save( data );
            
        case 'update':
            const id = data.id;
            delete data.id;
            return await repository.update( id, data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}

export async function settings(connection, action: string, data?: any) {

    const repository = connection.getRepository( Settings );
    const settings = new Settings(); 

    switch( action ) {
        case 'create':
            return await repository.save( data );
            
        case 'update':
            const id = data.id;
            delete data.id;
            return await repository.update( id, data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}