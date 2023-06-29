import mongoose from 'mongoose';

export const weatherSchema = new mongoose.Schema(
  {
    searchData: [{
        city: {
            type: String,
            trim: true,
            required: true,
        },
        temperature: {
            type: String,
            trim: true,
            required: true,
        },
        wind: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        timestamp_read_format: {
            type: String,
            trim: true,
        }
    }]
  },
  { timestamps: true},
);

export default mongoose.model('Weather', weatherSchema);
