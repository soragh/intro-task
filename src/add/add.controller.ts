import { Controller, Get, Post, Render, Body, Req, Redirect } from '@nestjs/common';
import { AppService } from '../app.parser'
import {CreateDataDto} from './dto/create.data.dto'

@Controller('add')
export class AddController {

    constructor(
        private readonly appService: AppService
        ) {}

    @Get()
    @Render('add')
    add(){
        return
    }

    @Post()
    @Redirect('/')
    create(
        @Body() createDataDto : CreateDataDto
    ){
        return this.appService.getalias(createDataDto.name).then(
      
            (alias)=>{
                const data = `${createDataDto.name};${createDataDto.gender};${createDataDto.phone};${createDataDto.email};${createDataDto.address};${createDataDto.nationality};${createDataDto.dob};${createDataDto.education};${createDataDto.mode_of_contact};${alias}`
                this.appService.write(data)
                return 
            }
          );
        
    }

}
