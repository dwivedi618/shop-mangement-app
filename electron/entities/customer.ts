import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    photo: string;

    @Column()
    phone: string;

    @Column()
    address: string;
}