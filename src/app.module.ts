import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.parser';
import { CsvModule } from 'nest-csv-parser'
import { AddController } from './add/add.controller';


@Module({
  imports: [CsvModule],
  controllers: [AppController, AddController],
  providers: [AppService],
})
export class AppModule {}
