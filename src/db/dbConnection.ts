import mongoose from "mongoose";
import config from "../config";

export default async () => {
    const connection = await mongoose.connect(config.DATABASE_CONTAINER_URL);
    return connection.connection.db;
}