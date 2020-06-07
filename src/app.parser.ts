import { Injectable } from '@nestjs/common'
import { CsvParser } from 'nest-csv-parser'
import { createReadStream, appendFile } from 'fs'
 
class Entity {
  
}
 
@Injectable()
export class AppService {
  constructor(
    private readonly csvParser: CsvParser
  ) {}
 
  async parse() {
    // Create stream from file (or get it from S3)
    const stream = createReadStream('public/list.csv')
    return await this.csvParser.parse(stream, Entity,null,null,{separator: ','})
 
  }

  write(data){
    appendFile('public/list.csv', `\r\n${data}`, function (err) {
      if (err) throw err;
      console.log('Updated!');
    });
  }
}