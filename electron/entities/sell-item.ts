import { Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Customer } from "./customer";
import { Product } from "./product";
import { Sell } from "./sell";

@Entity()
export class SellItem {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Sell)
    @JoinColumn()
    sell : Sell;   //Foriegin key, references to sell

    @OneToOne(type => Product)
    @JoinColumn()
    item: Product;   //Foriegin key, references to product

    @ManyToOne(type => Customer)
    @JoinColumn()
    currentCustomer : Customer;   //Foriegin key, references to customer

}