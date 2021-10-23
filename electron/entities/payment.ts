import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sell } from "./sell";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne( type => Sell)
    sell: Sell;

    @Column({type: 'float'})
    amount: number;

    @Column()
    discription: string;

    @CreateDateColumn()
    paymentDate: number;
}