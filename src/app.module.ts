import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { ProfileModule } from './profile/profile.module';
const MONGOURI = process.env.ATLAS_URISTRING || 'mongodb://127.0.0.1:27017/Profile' ;
@Module({
  
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
     MongooseModule.forRoot(MONGOURI),
     ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
