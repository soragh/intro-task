import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from '../app.parser'


@Controller('add')
export class AddController {

    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('add')
    add(){
        
    }

    @Post()
    create(){
        return
    }

}
