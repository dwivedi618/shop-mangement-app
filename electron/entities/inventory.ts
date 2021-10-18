import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Product } from './product';
@Entity()
export class Inventory {

        @PrimaryGeneratedColumn()
        id: number;

        @OneToOne(type => Product, product => product.inventory)
        @JoinColumn()
        item: Product;       //foriegn key references to product

        @Column({ default: 0 })
        itemInStock: number;

        @Column({ type: "double", default: 0 })
        totalStockPrice: number;


        @UpdateDateColumn()
        updatedAt: Date;
}