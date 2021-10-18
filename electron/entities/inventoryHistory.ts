import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Inventory } from "./inventory";

enum TransactionType {
    Added = 'added',
    Removed = 'removed',
    Sold = 'sold'
}
@Entity()
export class InventoryHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Inventory)
    inventory: Inventory;

    @Column({ default: 0 })
    quantity: number
    
    @Column({ nullable: true })
    amount: number;

    @Column()
    date: Date;
    
    @Column({ nullable: true })
    description: string;
    
    @Column({type: 'char'})
    trxType: TransactionType;

    @CreateDateColumn()
    createdAt: Date;
}