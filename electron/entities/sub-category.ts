import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,
    OneToMany
} from "typeorm";
import { Category } from "./category";
import { Product } from "./product";

@Entity()
export class SubCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    name: string;

    @ManyToOne(type => Category, category => category.subCategroies)
    category: Category;

    @OneToMany(type => Product, product => product.subCategory)
    products: Product[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}