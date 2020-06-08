import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { AppService } from '../app.parser'


@Controller('add')
export class AddController {

    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('add')
    add(){
        return
    }

    @Post()
    create(
        @Body() completeBody:{name:string}
    ){
        return completeBody
    }

}
