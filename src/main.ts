import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path'
import {registerHelper} from 'hbs'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000
  app.useStaticAssets(join(__dirname,'/node_modules/bootstrap/dist/css'))
  app.useStaticAssets(join(__dirname,'..','public'))
  app.setBaseViewsDir(join(__dirname,'..','views'))
  registerHelper('inc',function (options){return options+1})
  app.setViewEngine('hbs')
  await app.listen(port);
  console.log(`started on port ${port}`)
}
bootstrap();
