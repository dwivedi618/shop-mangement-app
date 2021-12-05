import { 
      Entity, 
      PrimaryGeneratedColumn, 
      Column, 
      CreateDateColumn, 
      UpdateDateColumn, 
      OneToOne,
      OneToMany, 
      ManyToMany,
      JoinColumn,
      JoinTable,
} from "typeorm";
import { Inventory } from "./inventory";
import { Brand } from "./brand";
import { Size } from "./size";
import { Color } from "./color";
import { Category } from "./category";
import { SubCategory } from "./sub-category";


@Entity()
export class Product {
      
      @PrimaryGeneratedColumn()
      id: number;
      
      @Column({ unique: true, nullable: true })
      name: string;
      
      @Column({ nullable: true })
      productCode: string;

      @Column({ type: "text", nullable: true })
      image: string;

      @Column({ type: "float", nullable: true })
      price: number;

      @Column({ type: "float", nullable: true })
      discountInPercent: number;

      @Column({ type: "float", nullable: true })
      discountInRuppee: number;

      @Column({ nullable: true })
      unit: string;

      @Column({ nullable: true })
      sellBy: string;

      @Column({ nullable: true })
      description: string;

      @Column({ type: "float", nullable: true })
      length: number;

      @Column({ nullable: true })
      stock: number;

      @OneToOne(type => Category)
      @JoinColumn()
      category: Category;

      @OneToOne(type => Inventory)
      @JoinColumn()
      subCategory: SubCategory;

      @OneToOne(type => Brand)
      @JoinColumn()
      brand: Brand;

      @ManyToMany(type => Color)
      @JoinTable()
      color: Color[];

      @ManyToMany(type => Size)
      @JoinTable()
      size: Size[];

      @OneToMany(type => Inventory, inventory => inventory.item)
      inventory: Inventory;

      @CreateDateColumn()
      createdAt: Date;

      @UpdateDateColumn()
      updatedAt: Date;
}