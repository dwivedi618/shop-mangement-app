import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Product } from './product';
@Entity()
export class Inventory {

        @PrimaryGeneratedColumn()
        id: number;

        @ManyToOne(type => Product, product => product.inventory)
        item: Product;       //foriegn key references to product

        @Column({ default: 0 })
        quantity: number;

        @Column({ type: "double", default: 0 })
        amount: number;

        @Column({ nullable: true })
        date: Date;

        @UpdateDateColumn()
        updatedAt: Date;

        @CreateDateColumn()
        createdAt: Date;
}