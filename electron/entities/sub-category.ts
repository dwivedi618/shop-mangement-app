import { category } from "db";
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne
} from "typeorm";
import { Category } from "./category";

@Entity()
export class SubCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    name: string;

    @ManyToOne(type => Category, category => category.subCategroies)
    category: Category;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}