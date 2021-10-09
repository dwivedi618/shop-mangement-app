import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Inventory } from "./inventory";

@Entity()
export class Product{
  
      @PrimaryGeneratedColumn()
      id: number;

      @Column({
            unique: true,
            nullable: true
      })
      name: string;

      @Column({
            nullable: true
      })
      brand: string;

      @Column({
            nullable: true
      })
      salePrice: number;

      @Column({
            nullable: true
      })
      discountInPercent : number;

      @Column({
            nullable: true
      })
      discountInRuppee : number;

      @Column({
            nullable: true
      })
      price : number;

      @Column({
            nullable: true
      })
      unit : string;

      @Column({
            nullable: true
      })
      isSellByMeter : boolean;

      @Column({
            nullable: true
      })
      grade : string;

      @Column({
            nullable: true
      })
      description: string;

      @Column({
            nullable: true
      })
      productCode: string;

      @Column({
            nullable: true
      })
      make: string;

      @Column({
            nullable: true
      })
      length: string;

      @Column({
            nullable: true
      })
      size: number;

      @Column({
            nullable: true
      })
      file: string;

      @OneToOne(type => Inventory, inventory => inventory.item, {
            cascade: true
      } )
      inventory: Inventory;
}