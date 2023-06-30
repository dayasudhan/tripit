import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { TripModule } from './trip/trip.module';
@Module({
  
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
     MongooseModule.forRoot(process.env.ATLAS_URISTRING2),
     ProfileModule,
     PostModule,
     TripModule,
     AuthModule,
     UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
