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
      ManyToOne
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
      
      @Column({ nullable: true })
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

      @ManyToOne(type => Category, category => category.products, {
            eager: true
      })
      category: Category;

      @ManyToOne(type => SubCategory, subCategory => subCategory.products, {
            eager: true
      })
      subCategory: SubCategory;

      @ManyToOne(type => Brand, brand => brand.products, {
            eager: true
      })
      brand: Brand;

      @ManyToMany(type => Color, {
            eager: true
      })
      @JoinTable()
      colors: Color[];

      @ManyToMany(type => Size, {
            eager: true
      })
      @JoinTable()
      sizes: Size[];

      @OneToMany(type => Inventory, inventory => inventory.item)
      inventory: Inventory;

      @CreateDateColumn()
      createdAt: Date;

      @UpdateDateColumn()
      updatedAt: Date;
}