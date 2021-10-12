import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true
  })
    photo: string;

    @Column({
        nullable: true
  })
    phone: string;

    @Column({
        nullable: true
  })
    password: string;
}