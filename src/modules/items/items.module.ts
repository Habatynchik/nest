import {Module} from "@nestjs/common";
import {ItemsController} from "./items.controller";
import {ItemsService} from "./items.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Item} from "./entities/item.entity";
import {Rarity} from "./entities/rarity.entity";

@Module({
    controllers: [ItemsController],
    providers: [ItemsService],
    imports: [TypeOrmModule.forFeature([Item, Rarity])],
})
export class ItemsModule {

}