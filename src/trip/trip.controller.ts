import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import {
  TripService
} from './trip.service';
import {
  CreateTripDto
} from '../dto/create-Trip.dto';
import {
  UpdateTripDto
} from '../dto/update-Trip.dto';

@Controller('Trip')
export class TripController {
  constructor(private readonly TripService: TripService) {}

  @Post()
  create(@Body() createTripDto: CreateTripDto) {
    return this.TripService.create(createTripDto);
  }

  @Get()
  findAll() {
    console.log("Trip findall")
    return this.TripService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TripService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
    return this.TripService.update(id, updateTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TripService.remove(id);
  }
}