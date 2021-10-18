import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Inventory } from "./inventory";

@Entity()
export class Product {

      @PrimaryGeneratedColumn()
      id: number;

      @Column({ unique: true, nullable: true })
      name: string;

      @Column({ nullable: true })
      brand: string;

      @Column({ type: "float", nullable: true })
      salePrice: number;

      @Column({ type: "float", nullable: true })
      discountInPercent: number;

      @Column({ type: "float", nullable: true })
      discountInRuppee: number;

      @Column({ type: "float", nullable: true })
      price: number;

      @Column({ nullable: true })
      unit: string;

      @Column({ nullable: true })
      isSellByMeter: string;

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

      @Column({ type: "longtext", nullable: true })
      file: string;

      @OneToMany(type => Inventory, inventory => inventory.item)
      inventory: Inventory;

      @CreateDateColumn()
      createdAt: Date;

      @UpdateDateColumn()
      updatedAt: Date;
}