import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany
} from 'typeorm';
import { SubCategory } from './sub-category';
import { Product } from './product';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    name: string;

    @Column({type: "text", nullable: true})
    image: string; 

    @OneToMany(type => SubCategory, subCategory => subCategory.category, {
        cascade: true,
        eager:true
    })
    subCategroies: SubCategory [];

    @OneToMany(type => Product, product => product.category)
    products: Product[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}