

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Inventory } from "./inventory";
import { Product } from './product';

@Entity()
export class InventoryHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Product, product => product.inventory)
    @JoinColumn()
    item: Product;       //foriegn key references to product

    @Column({
        nullable: true
    })
    itemInStock: number;

    @Column({
        nullable: true
    })
    pricePerItem: number;

    @Column({
        default: 0
    })
    totalStockPrice: number;

    @Column({
        nullable: true
    })
    lastUpdate: Date;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: true
    })
    code: string

    @Column({
        nullable: true
    })
    quantity: number

    @Column({
        nullable: true
    })
    isAddingStock: boolean

    @Column({
        nullable: true
    })
    isSellByMeter: string

    @Column({
        nullable: true
    })
    length: number

    @OneToMany(type => Inventory, inventory => inventory.history)
    inventory: Inventory;
}