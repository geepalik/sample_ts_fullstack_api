import mongoose from 'mongoose';

export const postSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    content: {
        type: {},
        min: 20,
        max: 2000000
    },
  },
  { timestamps: true},
);

export default mongoose.model('Post', postSchema);
