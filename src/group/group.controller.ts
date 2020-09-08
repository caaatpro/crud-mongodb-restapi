import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupModule } from './group.module';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get()
    async getGroups(): Promise<GroupModule[]> {
        return this.groupService.findAll();
    }

    @Get(':id')
    async getGroup(@Param('id') id: string): Promise<GroupModule> {
        return this.groupService.findOne(id);
    }

    @Post()
    async createGroup(
        @Body(ValidationPipe) createGroupDto: CreateGroupDto,
    ): Promise<GroupModule> {
        return this.groupService.create(createGroupDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(ValidationPipe) updateGroupDto: UpdateGroupDto,
    ): Promise<GroupModule> {
        return this.groupService.update(id, updateGroupDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ ok?: number, n?: number }> {
        return this.groupService.delete(id);
    }
}
