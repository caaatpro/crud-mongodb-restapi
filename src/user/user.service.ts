import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().populate('groups', 'friends').exec();
    }

    async findOne(id: string): Promise<IUser> {
        return await this.userModel.findOne({ _id: id }).populate('groups', 'friends').exec();
    }

    async delete(id: string): Promise<{ ok?: number, n?: number }> {
        return await this.userModel.deleteOne({
            _id: id
        }).exec();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        return await this.userModel.updateOne({
            _id: id
        }, updateUserDto, { new: true }).exec();
    }
}
