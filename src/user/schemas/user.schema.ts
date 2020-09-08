import * as mongoose from 'mongoose';
import { genderEnum } from '../enums/gender.enums';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    gender: { type: String, required: true, enum: Object.values(genderEnum) },
    groups: [ { type: mongoose.Schema.Types.ObjectId, ref: "Group" } ],
    friends: [ { type: mongoose.Schema.Types.ObjectId, ref: "User" } ],
});

UserSchema.index({ name: 1 }, { unique: true })