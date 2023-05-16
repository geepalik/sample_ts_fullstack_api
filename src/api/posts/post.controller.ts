import { Request, Response } from "express";
import { BaseController } from "../../base/base.controller";
import { PostService } from "./post.service";

export class PostController extends BaseController {

    postService: PostService;

    constructor(){
        super();
        this.postService = new PostService();
    }

    async create(req: Request, res: Response){
        try{
            const {name, content} = req.body;
            const doc = await this.postService.create({name, content});
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getAllPosts(req: Request, res: Response){
        try{
            const doc = await this.postService.getAllPosts();
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getPost(req: Request, res: Response){
        try{
            const {id} = req.params;
            const doc = await this.postService.getPost({id});
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }
}