import * as mongoose from 'mongoose';

export const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

GroupSchema.index({ name: 1 }, { unique: true })