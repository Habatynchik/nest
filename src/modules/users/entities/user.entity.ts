import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Role} from "./role.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    surname: string;

    @Column()
    name: string;

    @ManyToMany(() => Role, (role) => role.users)
    @JoinTable()
    roles: Role[];
}


class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    balance: number;



}