import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}
@Entity()
export class Customer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: "text", nullable: true })
  photo: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: "varchar" })
  gender: Gender

  @Column({ nullable: true })
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}