import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "../../../../src/index";

@Entity()
export class MyUser extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
