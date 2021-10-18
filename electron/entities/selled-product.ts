import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from "typeorm";
import { Product } from "./product";
import { Sell } from "./sell";

@Entity()
export class SelledProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Sell, sell => sell.selledProducts)
    sell: Sell;   //Foriegin key, references to sell

    @ManyToOne(type => Product)
    item: Product;   //Foriegin key, references to product

    @Column({ type: "float" })
    quantity: number;

    @Column({ type: "float", nullable: true })
    salePrice: number;

    @Column({ type: "float", default: 0 })
    fixedDiscount: number;

    @Column({ type: "float", default: 0 })
    specialDiscount: number;

}