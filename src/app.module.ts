import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./database/database.module";
import {ItemsModule} from "./modules/items/items.module";
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, ItemsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


