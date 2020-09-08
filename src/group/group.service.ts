import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { IGroup } from './interfaces/group.interface';

@Injectable()
export class GroupService {
    constructor(@InjectModel('Group') private readonly groupModel: Model<IGroup>) {}

    async create(createGroupDto: CreateGroupDto): Promise<IGroup> {
        const createdGroup = new this.groupModel(createGroupDto);
        return await createdGroup.save();
    }

    async findAll(): Promise<IGroup[]> {
        return this.groupModel.find().exec();
    }

    async findOne(id: string): Promise<IGroup> {
        return await this.groupModel.findOne({ _id: id });
    }

    async delete(id: string): Promise<{ ok?: number, n?: number }> {
        return await this.groupModel.deleteOne({
            _id: id
        });
    }

    async update(id: string, updateGroupDto: UpdateGroupDto): Promise<IGroup> {
        return await this.groupModel.updateOne({
            _id: id
        }, updateGroupDto, { new: true });
    }
}
