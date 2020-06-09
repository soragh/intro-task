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
    const data= await (await this.csvParser.parse(stream, Entity))
    return data
  }
  

  write(data){
    appendFile('public/list.csv', `\r\n${data}`, function (err) {
      if (err) throw err;
      console.log('Updated!');
    });
  }

  async getalias(name:string):Promise<string>{
    const aliases=[]
    const stream = createReadStream('public/list.csv')
    const values= await (await this.csvParser.parse(stream, Entity)).list
    for (const i in values) {
        aliases.push(values[i].alias)
    }
    console.log(aliases)
    name= name.replace(/[^A-Za-z0-9_]/g, ' ').trim()
    name = name.replace(/\s+/g, ' ').toLowerCase();
	  name = name.replace(/ /gi, '-');
	  name = name.replace(/_/gi, '-');
	  let c=1;
	  let newAlias=name;
	  while(aliases.includes(newAlias)){
		  newAlias=name + '-' + c;
		  c+=1;
	  }
	  aliases.push(newAlias);
    return newAlias;
  }
    
}