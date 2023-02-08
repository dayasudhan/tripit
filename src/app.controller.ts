import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("process.env.ATLAS_URISTRING",process.env.ATLAS_URISTRING)
    return this.appService.getHello();
  }
}
