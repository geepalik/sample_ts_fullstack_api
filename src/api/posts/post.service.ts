import slugify from "slugify";
import { CreatePostReqDto } from "./dto/create-post-req.dto";
import { PostModel } from "./post.model";
import { CreatePostDto } from "./dto/create-post.dto";
import { CustomErrors } from "../../util/CustomErrors";
import { GetPostDto } from "./dto/get-post.dto";

export class PostService{

    postModel: PostModel;

    constructor(){
        this.postModel = new PostModel();
    }

    async create(createPostReq: CreatePostReqDto){
        const {name, content} = createPostReq;
        try{
            const slug = slugify(name);
            const createPost: CreatePostDto = {
                name, slug, content
            };
            const result = await this.postModel.create(createPost);
            return result;
        }catch(error: any){
            throw new CustomErrors(`A post with name ${name} already exists`, error.message, 400);
        }
    }

    getAllPosts(){
        try{
            return this.postModel.getAllPosts();
        }catch(error: any){
            throw new Error();
        }
    }

    getPost(getPostDto: GetPostDto){
        try{
            return this.postModel.getPost(getPostDto);
        }catch(error: any){
            throw new CustomErrors(`Post with id ${getPostDto.id} not found`, error.message, 404);
        }
    }
}