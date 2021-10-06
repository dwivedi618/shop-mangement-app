import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from './product';

@Entity()
export class Inventory{

        @PrimaryGeneratedColumn()
        id: number;

        @ManyToOne(type => Product, product => product.inventories)
        item: Product;       //foriegn key references to product

        @Column()
        itemInStock: number;

        @Column()
        pricePerItem: number;

        @Column()
        totalStockPrice: number;

        @Column()
        lastUpdate: Date;

        @Column()
        description: string;

        @Column()
        code : string
}