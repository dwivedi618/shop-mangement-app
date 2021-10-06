import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Inventory } from "./inventory";

@Entity()
export class Product{
  
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column()
      brand: string;

      @Column()
      salePrice: number;

      @Column()
      discountInPercent : number;

      @Column()
      discountInRuppee : number;

      @Column()
      price : number;

      @Column()
      unit : string;

      @Column()
      isSellByMeter : boolean;

      @Column()
      grade : string;

      @Column()
      description: string;

      @Column()
      productCode: string;

      @Column()
      make: string;

      @Column()
      length: string;

      @Column()
      size: number;

      @Column()
      file: string;

      @OneToMany(type => Inventory, inventory => inventory.item )
      inventories: Inventory[];
}