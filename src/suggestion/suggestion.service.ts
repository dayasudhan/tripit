import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  Suggestion,
  SuggestionDocument
} from './schema/suggestion.schema';

@Injectable()
export class SuggestionService {
  constructor(@InjectModel(Suggestion.name) private readonly suggestionModel: Model < SuggestionDocument > ) {}
  
  async create(createSuggestionDto: CreateSuggestionDto) : Promise < SuggestionDocument >{
    console.log("trip service create",createSuggestionDto);
    const Suggestion = await new this.suggestionModel(createSuggestionDto);
    const ret = Suggestion.save();
    console.log("ret",ret)
    return ret;
  }

  async findAll(): Promise < SuggestionDocument[] > {
    console.log("trip service findalll");
    return this.suggestionModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.suggestionModel.findById(id);
  }

  async update(id: string, updateSuggestionDto: UpdateSuggestionDto): Promise < SuggestionDocument > {
    console.log("update ")
    return this.suggestionModel.findByIdAndUpdate(id, updateSuggestionDto);
  }

  async remove(id: string) {
    return this.suggestionModel.findByIdAndRemove(id);
  }
}
