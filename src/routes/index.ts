import express, { Router } from "express";
import postRoutes from "../api/posts/post.routes";

const rootRouter: Router = express.Router();
rootRouter.use('/api', postRoutes);

export default rootRouter;