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
    console.log("update ",id)
    return this.feedModel.findByIdAndUpdate(id, updateFeedDto);
  }
  async addSuggestion(id: string, updateFeedDto: UpdateFeedDto): Promise < FeedDocument > {
    console.log("update ")
    return this.feedModel.findByIdAndUpdate(id, updateFeedDto);
  }
  async addFeed(id: string, updateFeedDto: UpdateFeedDto) {
    //console.log("add feed ",id,updateFeedDto)
    const ret = await this.feedModel.updateOne({"_id" : id},  
      { $addToSet: { "newsfeed": updateFeedDto.newsfeed }} );
      console.log("ret",ret)
      return ret;
  }
//   .updateOne(
//     { _id: 1 },
//     { $addToSet: { colors: "mauve" } }
//  )
  async remove(id: string) {
    return this.feedModel.findByIdAndRemove(id);
  }
  async findImages(id: string) {
    //console.log("trip service findalll");
    const ret =  await  this.feedModel.findById(id);
    
    //console.log("ret",ret)
    const images = ret.newsfeed?.filter((item) => item.feedimages?.length >0);
   // console.log("images",images)
    const retimages = images?.map((item) => item.feedimages);
    let rimages = []
    images?.forEach((item) => {item.feedimages?.forEach((item) => rimages.push(item))}    );
    // console.log("retimages",retimages)
    // console.log("rimages",rimages)
    return rimages;
  }
  async findVideos(id: string) {
    console.log("trip service findalll");
    const ret =  await  this.feedModel.findById(id);
    console.log("ret",ret)
    const videos = ret.newsfeed.filter((item) => item.feedvideos.length >0);
    // const retimages = videos.map((item) => item.feedvideos);
    // let rimages = []
    // videos.forEach((item) => {item.feedvideos.forEach((item) => rimages.push(item))}    );
    // console.log("retimages",retimages)
    // console.log("rimages",rimages)
    return videos;
  }
}
