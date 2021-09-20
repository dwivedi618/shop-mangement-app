import * as mysql from 'mysql2/promise';
import DbConfig  from 'config/db.config';

export default async function execute(query: string, data?: Array<any>) {

    try {

        const connection = await mysql.createConnection({
            host: DbConfig.host,
            user: 'root',
            database: 'psm',
            password: 'satyam123'
        });

        const [result, fields] = await connection.execute( query );
        return result;
    } catch( err ) {
        console.log('Error from db:', err);
        throw new Error('Error in database');
    }

}