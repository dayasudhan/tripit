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

  @Prop({
    type:[{name:{type:String},
       phoneno:{type:String},
       emailid:{type:String},
       letter:{type:String},
       url:{type:String},
       time:Date
    }]
  })
  inbox: { name: string; phoneno: string,emailid:String,letter:String,url:String,time:Date}[];

}

export const FeedSchema = SchemaFactory.createForClass(Feed);