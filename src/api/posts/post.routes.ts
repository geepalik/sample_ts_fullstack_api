import express, { Request, Response, Router } from 'express';
import { postCreateValidator, postGetValidator } from './post.middleware';
import runValidation from '../../middleware/validators';
import { PostController } from './post.controller';

const postRoutes: Router = express.Router();

const postController = new PostController();

postRoutes.post(
    '/post',
    postCreateValidator,
    runValidation,
    (req: Request, res: Response) => {postController.create(req, res)}
);
postRoutes.get(
    '/posts',
    (req: Request, res: Response) => {postController.getAllPosts(req, res)}    
);
postRoutes.get(
    '/post/:id',
    postGetValidator,
    runValidation,
    (req: Request, res: Response) => {postController.getPost(req, res)}    
)

export default postRoutes;