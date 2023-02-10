import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
//import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}

  @Get()
  getHello(): string {
    console.log("process.env.ATLAS_URISTRING",process.env.ATLAS_URISTRING)
    return this.appService.getHello();
  }

  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    //return req.user;
    return this.authService.login(req.user);
  }
}
