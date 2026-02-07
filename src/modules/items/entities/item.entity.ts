import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Rarity} from "./rarity.entity";

@Entity("items")
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @ManyToOne(() => Rarity, (rarity) => rarity.items)
    rarity: Rarity;
}