import { Request, Response } from "express";
import { BaseController } from "../../base/base.controller";

export class PostController extends BaseController {

    async create(req: Request, res: Response){
        try{
            const doc = {message: "Ok!"};
            this.jsonRes(doc, res);
        }catch(e){
            this.errRes(e, res, "Failed");
        }
    }
}