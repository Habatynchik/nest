import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Item} from "./entities/item.entity";
import {FindOptionsUtils, In, Repository} from "typeorm";

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(Item) private itemRepository: Repository<Item>
    ) {
    }


    findAll() {
        return this.itemRepository.find();
    }

    findById(userId: number) {
        return this.itemRepository.findOne({
            where: {
                id: userId
            }
        })
    }

    addItem(item: Item) {
        return this.itemRepository.save(item);
    }
}
