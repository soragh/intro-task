import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.parser';
import { CsvModule } from 'nest-csv-parser'
import { AddController } from './add/add.controller';
import {ConfigModule} from '@nestjs/config' 

@Module({
  imports: [CsvModule,ConfigModule.forRoot()],
  controllers: [AppController, AddController],
  providers: [AppService],
})
export class AppModule {}
