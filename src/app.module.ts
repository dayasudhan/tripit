import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
const MONGOURI = process.env.ATLAS_URISTRING || 'mongodb://127.0.0.1:27017/Profile' ;

@Module({
  
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
     MongooseModule.forRoot(MONGOURI),
     ProfileModule,
     PostModule,
     AuthModule,
     UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
