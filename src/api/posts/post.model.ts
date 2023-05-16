import { CreatePostDto } from './dto/create-post.dto';
import { GetPostDto } from './dto/get-post.dto';
import Post from './schema/post.schema';

export class PostModel{
    
    //method for creating new: if exists (slug unique)->error
    //get all
    //get by id

    create(createPostDto: CreatePostDto){
        return Post.create(createPostDto);
    }
    

    /**
     * TODO: pagination
     * @returns 
     */
    getAllPosts(){
        return Post.find();
    }


    getPost(getPostDto: GetPostDto){
        const {id} = getPostDto;
        return Post.findById(id);
    }
}