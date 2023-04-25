import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import {
  Document
} from 'mongoose';

export type SuggestionDocument = Suggestion & Document;

@Schema()
export class Suggestion {

  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop()
  phoneno: string;

  @Prop()
  emailid: string;

  @Prop()
  letter: string;

  @Prop()
  time: Date;
 
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion);