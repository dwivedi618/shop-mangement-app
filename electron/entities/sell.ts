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
    
    @Column({ type: 'float',default : 0 })
    discount: number;

    @Column({ type: 'float' })
    finalPayableAmount: number;
    
    @Column()
    receivedAmount: number;
    
    @Column()
    paymentMode: string;
    
    @Column()
    lastPaymentDate: Date;
    
    @OneToMany(type => SelledProduct, selledProduct => selledProduct.sell, {
        cascade: true
    })
    selledProducts: SelledProduct [];

    @CreateDateColumn()
    selledDate: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    
}