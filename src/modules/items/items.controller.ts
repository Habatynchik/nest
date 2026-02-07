import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ItemsService} from "./items.service";
import {Item} from "./entities/item.entity";

@Controller('items')
export class ItemsController {
    constructor(
        private itemsService: ItemsService
    ) {
    }

    @Get()
    getAll() {
        return this.itemsService.findAll();
    }

    @Get("/:id")
    getById(@Param() id: number){
        return this.itemsService.findById(id);
    }

    @Post()
    addItem(@Body() item: Item) {
        return this.itemsService.addItem(item);
    }
}