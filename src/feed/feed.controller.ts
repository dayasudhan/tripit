import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
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

  @Get()
  findAll() {
    console.log("feed findAll") 
    return this.feedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedService.findOne(id);
  }
  // @Get(':username')
  // findByUsername() {
  //   console.log("findbyusrname controller")
  //   return this.feedService.findByUserName('daya');
  // }
  @Post(':id')
  update(@Param('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
    console.log("feed update",  updateFeedDto,id)
    return this.feedService.update(id, updateFeedDto);
  }
  @Put(':id')
  addFeed(@Param('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
    console.log("feed add",  updateFeedDto)
    return this.feedService.addFeed(id, updateFeedDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedService.remove(id);
  }

//   @Put('/:id')
// async updateStudent(@Res() response,@Param('id') studentId: string,
// @Body() updateStudentDto: UpdateStudentDto) {
//   try {
//    const existingStudent = await this.studentService.updateStudent(studentId, updateStudentDto);
//   return response.status(HttpStatus.OK).json({
//   message: 'Student has been successfully updated',
//   existingStudent,});
//  } catch (err) {
//    return response.status(err.status).json(err.response);
//  }
//}
}
