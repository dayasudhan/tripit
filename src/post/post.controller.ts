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
  PostService
} from './post.service';
import {
  CreatePostDto
} from '../dto/create-Post.dto';
import {
  UpdatePostDto
} from '../dto/update-Post.dto';

@Controller('Post')
export class PostController {
  constructor(private readonly PostService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.PostService.create(createPostDto);
  }

  @Get()
  findAll() {
    console.log("Post findall")
    return this.PostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PostService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.PostService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PostService.remove(id);
  }
}