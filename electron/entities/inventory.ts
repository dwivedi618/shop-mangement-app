import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { InventoryHistory } from "./inventoryHistory";
import { Product } from './product';

@Entity()
export class Inventory{

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
        code : string

        @ManyToOne(type => InventoryHistory, inventoryHistory => inventoryHistory.inventory)
        history : InventoryHistory

        @Column({
                nullable:true
        })
        quantity: any

        @Column({
                nullable:true
        })
        isAddingStock : boolean
      
        @Column({
                nullable:true
        })
        isSellByMeter : any

        @Column({
                nullable:true
        })
        length : number
}