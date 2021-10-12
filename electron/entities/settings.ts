import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Settings{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
  })
    type: string;

    @Column({
        nullable: true
  })
    subType: string;

    @Column({
        nullable: true
  })
    value: string;
}