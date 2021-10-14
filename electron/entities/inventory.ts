import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { InventoryHistory } from "./inventoryHistory";
import { Product } from './product';

@Entity()
export class Inventory {

        @PrimaryGeneratedColumn()
        id: number;

        @OneToOne(type => Product, product => product.inventory)
        @JoinColumn()
        item: Product;       //foriegn key references to product

        @Column({ default: 0 })
        itemInStock: number;

        @Column({ type: "float", nullable: true})
        pricePerItem: number;

        @Column({ type: "double", default: 0 })
        totalStockPrice: number;

        @Column({ nullable: true })
        lastUpdate: Date;

        @Column({ nullable: true })
        description: string;

        @Column({ nullable: true })
        code: string;

        @ManyToOne(type => InventoryHistory, inventoryHistory => inventoryHistory.inventory)
        history: InventoryHistory

        @Column({ nullable: true })
        isAddingStock: boolean;

        @Column({ nullable: true })
        isSellByMeter: string;

        @Column({ nullable: true })
        length: number;

        @CreateDateColumn()
        createdAt: Date;

        @UpdateDateColumn()
        updatedAt: Date;
}