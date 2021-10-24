import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sell } from "./sell";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne( type => Sell, sell => sell.payments)
    sell: Sell;

    @Column({type: 'float'})
    amount: number;

    @Column({nullable: true})
    paymentMode: string;

    @Column({nullable: true})
    description: string;

    @CreateDateColumn()
    paymentDate: number;
}