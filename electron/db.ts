import { getConnection } from "typeorm";
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
            return await repository.save( data );

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
    const inventory = new Inventory(); 

    switch( action ) {
        case 'create':
            return await repository.save( data );
            
        case 'update':
            return await repository.save( data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}


export async function product( connection, action: string, data?: any ) {

    const repository = connection.getRepository( Product );
    const product = new Product(); 

    switch( action ) {
        case 'create':
            return await repository.save( data );
            
        case 'update':
            return await repository.save( data );

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
            return await repository.save( data );

        case 'fetch':
            return await repository.find( data );

        case 'delete':
            return await repository.remove( data );

        default:
            console.log('This is the default option')
    }

}