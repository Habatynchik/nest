import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Item} from "./item.entity";

@Entity("rarities")
export class Rarity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Item, (item) => item.rarity)
    items: Item[]
}
