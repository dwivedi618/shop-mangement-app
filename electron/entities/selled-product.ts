import {
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    Column,
    OneToOne,
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

    @OneToOne(type => Product)
    @JoinColumn()
    item: Product;   //Foriegin key, references to product

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    brand: string;

    @Column({ type: "float", nullable: true })
    salePrice: number;

    @Column({ type: "float", nullable: true })
    discountInPercent: number;

    @Column({ type: "float", nullable: true })
    discountInRuppee: number;

    @Column({ type: "float",nullable: true })
    price: number;

    @Column({ nullable: true })
    unit: string;

    @Column({ default: false })
    isSellByMeter: boolean;

    @Column({ nullable: true })
    grade: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    productCode: string;

    @Column({ nullable: true })
    make: string;

    @Column({ type: "float", nullable: true })
    length: number;

    @Column({ nullable: true })
    size: string;

    @Column({ type: "float" })
    quantity: number;

}