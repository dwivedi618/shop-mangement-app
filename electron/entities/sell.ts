import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
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

    @ManyToOne(type => Customer, )
    @JoinColumn()
    customer : Customer;   //Foriegin key references to customer

    @Column()
    receiptNumber: string;

    @OneToMany(type => SelledProduct, selledProduct => selledProduct.sell, {
        cascade: true
    })
    selledProducts: SelledProduct [];

    @Column({
        nullable : true
    })
    discountInPercent: number;

    @Column({
        nullable : true
    })
    discountInRuppee: number;

    @Column({
        nullable : true
    })
    cartAmount: number;

    @Column()
    finalPayableAmount: number;

    @Column()
    receivedAmount: number;

    @Column()
    paymentMode: string;

    @CreateDateColumn()
    date: Date;

    @UpdateDateColumn()
    paymentDate: Date;
}