import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }];
  readonly friends: [{ type: Schema.Types.ObjectId, ref: 'User' }];
}
