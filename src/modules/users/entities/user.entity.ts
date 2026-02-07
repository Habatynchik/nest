import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./role.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @ManyToMany(() => Role, (role) => role.users)
    @JoinTable()
    roles: Role[];
}
