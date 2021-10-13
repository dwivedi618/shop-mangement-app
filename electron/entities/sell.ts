import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Customer } from "./customer";
import { SellItem } from "./sell-item";

@Entity()
export class Sell {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Customer)
    @JoinColumn()
    currentCustomer : Customer;   //Foriegin key references to customer

    @Column()
    receiptNumber: string;

    @OneToMany(type => SellItem, sellItem => sellItem.sell)
    @JoinColumn()
    sellItems: SellItem []

    @Column()
    discountInPercent: number;

    @Column()
    discountInRuppee: number;

    @Column()
    cartAmount: number;

    @Column()
    finalPayableAmount: number;

    @Column()
    recievedAmount: number;

    @Column()
    paymentMode: number;

    @Column()
    date: Date;

    @Column()
    paymentDate: Date;
}