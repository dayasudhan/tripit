import { Controller, Get, Post, Body, Patch, Param, Delete,Put,Query } from '@nestjs/common';
import { FeedService } from './feed.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  create(@Body() createFeedDto: CreateFeedDto) {
    console.log("feed create",createFeedDto)  
    return this.feedService.create(createFeedDto);
  }

  @Get('/all')
  findAll() {
    console.log("feed findAll") 
    return this.feedService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.feedService.findOne(id);
  }

  @Post()
  update(@Query('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
    console.log("feed update",  updateFeedDto,id)
    return this.feedService.update(id, updateFeedDto);
  }
  @Put()
  addFeed(@Query('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
    console.log("feed add",  updateFeedDto)
    return this.feedService.addFeed(id, updateFeedDto);
  }
  @Delete()
  remove(@Query('id') id: string) {
    return this.feedService.remove(id);
  }
  @Get('/images')
  findImages(@Query('id') id: string) {
    console.log("feed findAll") 
    return this.feedService.findImages(id);
  }
  @Get('/videos')
  findVideos(@Query('id') id: string) {
    console.log("feed videos") 
    return this.feedService.findVideos(id);
  }
  @Get('/manifesto')
  findManifesto(@Query('id') id: string) {
   const maifesto= [
    {  'url': 'https://chunavane.s3.ap-south-1.amazonaws.com/jds_manifesto/mf1.jpg'},
   {  'url': 'https://chunavane.s3.ap-south-1.amazonaws.com/jds_manifesto/mf2.jpg'},
   {  'url': 'https://chunavane.s3.ap-south-1.amazonaws.com/jds_manifesto/mf3.jpg'},
   {  'url': 'https://chunavane.s3.ap-south-1.amazonaws.com/jds_manifesto/mf4.jpg'}
  ]
   return maifesto
  }
}
