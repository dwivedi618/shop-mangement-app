import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToOne, 
    JoinColumn, 
    UpdateDateColumn, 
    CreateDateColumn, 
    OneToMany 
} from "typeorm";
import { Customer } from "./customer";
import { SelledProduct } from "./selled-product";

@Entity()
export class Sell {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Customer)
    @JoinColumn()
    currentCustomer : Customer;   //Foriegin key references to customer

    @Column()
    receiptNumber: string;

    @OneToMany(type => SelledProduct, selledProducts => selledProducts.sell, {
        cascade: true
    })
    selledProducts: SelledProduct [];

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

    @CreateDateColumn()
    date: Date;

    @UpdateDateColumn()
    paymentDate: Date;
}