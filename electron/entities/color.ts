import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity()
export class Color {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    name: string;

    @Column({type: "text", nullable: true})
    code: string; 

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}