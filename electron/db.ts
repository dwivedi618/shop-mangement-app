import { Customer } from './entities/customer'
import { Product } from './entities/product'
import { Inventory } from './entities/inventory'
import { Sale } from './entities/sale'

// const connection = getConnection();

export async function customer(connection, action: string, data?: any) {
    const repository = connection.getRepository( Customer );
    const customer = new Customer(); 

    switch( action ) {
        case 'create':
            return await repository.save( data );

        case 'update':
            return await repository.update( data.id, data );

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
            return await repository.update( data.id, data );

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

            const inventory = new Inventory(); 
            inventory.item = product;
            return await repository.save( product );
            
        case 'update':
            return await repository.update( data.id, data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}


export async function sale(connection, action: string, data?: any) {

    const repository = connection.getRepository( Sale );
    const sale = new Sale(); 

    switch( action ) {
        case 'create':
            return await repository.save( data );
            
        case 'update':
            return await repository.update( data.id, data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}