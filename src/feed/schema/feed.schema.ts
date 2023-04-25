import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import {
  Document
} from 'mongoose';

export type FeedDocument = Feed & Document;

@Schema()
export class Feed {
  @Prop()
  name: string;

  @Prop()
  username: string;
  // newsfeed:[{heading:string;
  //   description:string;
  //   feedvideo:string;
  //   feedimages:[{url:string}];
  //   feedvideos:[{url:string}];
  //   feedaudios:[{url:string}];
  //  //  time:Date
  // }];
  @Prop({
    type:[{heading:{type:String},
      description:{type:String},
       feedvideo:{type:String},
       feedimages:[{url:String}],
       feedvideos:[{url:String}],
       feedaudios:[{url:String}],
       time:Date
    }]
  })
  newsfeed: { heading: string; description: string,feedvideo:{type:String},feedimages:[{url:String}],
  feedvideos:[{url:String}],
  feedaudios:[{url:String}]}[];
}

export const FeedSchema = SchemaFactory.createForClass(Feed);