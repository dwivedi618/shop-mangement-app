import {getConnection} from "typeorm";
import { Customer } from '../entities/customer'
const connection = getConnection();
const repository = connection.getRepository( Customer );


console.log(getConnection());