import express, { Request, Response, Router } from 'express';
import { postCreateValidator } from './post.middleware';
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

export default postRoutes;