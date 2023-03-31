import {
  Injectable
} from '@nestjs/common';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  CreatePostDto
} from '../dto/create-Post.dto';
import {
  UpdatePostDto
} from '../dto/update-Post.dto';
import {
  Post,
  PostDocument
} from '../schema/Post.schema';

@Injectable()
export class PostService {

  constructor(@InjectModel(Post.name) private readonly PostModel: Model < PostDocument > ) {}

  async create(createPostDto: CreatePostDto): Promise < PostDocument > {
    const Post = new this.PostModel(createPostDto);
    return Post.save();
  }

  async findAll(): Promise < PostDocument[] > {
    return this.PostModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.PostModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise < PostDocument > {
    return this.PostModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: string) {
    return this.PostModel.findByIdAndRemove(id);
  }
}