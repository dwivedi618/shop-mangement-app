import * as promise from 'mysql2/promise';
const bluebird = require('bluebird');
import { DbConfig }  from './config/db.conf';

export default async function execute(query: string, data?: Array<any>) {

    try {

        const connection = await promise.createConnection({
            host: DbConfig.host,
            user: DbConfig.user,
            database: DbConfig.database,
            password: DbConfig.password
        });

        const [result, fields] = await connection.execute( query );
        return result;
    } catch( err ) {
        console.log('Error from db:', err);
        throw new Error('Error in database');
    }

}