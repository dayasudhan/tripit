import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
const MONGOURI = 
process.env.ATLAS_URISTRING ||
  'mongodb://127.0.0.1:27017/Employee';
@Module({
  imports: [ MongooseModule.forRoot(MONGOURI),EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
