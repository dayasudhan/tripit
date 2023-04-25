import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  Feed,
  FeedDocument
} from './schema/feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Feed.name) private readonly feedModel: Model < FeedDocument > ) {}
  
  async create(createFeedDto: CreateFeedDto) : Promise < FeedDocument >{
    console.log("trip service create",createFeedDto);
    const feed = new this.feedModel(createFeedDto);
    return feed.save();
  }

  async findAll(): Promise < FeedDocument[] > {
    console.log("trip service findalll");
    return this.feedModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.feedModel.findById(id);
  }
  // async findByUserName(username: string) {
  //   console.log("findbyusrname service")
  //   return this.feedModel.find({ username: username });
  // }
  async update(id: string, updateFeedDto: UpdateFeedDto): Promise < FeedDocument > {
    console.log("update ")
    return this.feedModel.findByIdAndUpdate(id, updateFeedDto);
  }

  async remove(id: string) {
    return this.feedModel.findByIdAndRemove(id);
  }
}