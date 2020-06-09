import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.parser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello():any {
    console.log(this.appService.parse())
    return this.appService.parse().then(
      (result)=>result ? {outputs: result.list}:[]
    );
  }

  
}
