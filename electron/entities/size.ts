import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity()
export class Size {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}