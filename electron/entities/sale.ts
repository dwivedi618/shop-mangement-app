import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Customer } from "./customer";
import { Product } from "./product";

@Entity()
export class Sale {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Product)
    @JoinColumn()
    item: Product;   //Foriegin key references to product

    @OneToOne(type => Customer)
    
    @JoinColumn()
    currentCustomer : Customer;   //Foriegin key references to customer

    @Column()
    receiptNumber: string;

    @Column()
    discountInPercent: number;

    @Column()
    discountInRuppee: number;

    @Column()
    priceAfterDiscount: number;

    @Column()
    cartAmount: number;

    @Column()
    finalPayableAmount: number;
}