import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany
} from "typeorm";
import { SubCategory } from "./sub-category";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    name: string;

    @Column({type: "text", nullable: true})
    image: string; 

    @OneToMany(type => SubCategory, subCategory => subCategory.category, {
        cascade: true
    })
    subCategroies: SubCategory []

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}