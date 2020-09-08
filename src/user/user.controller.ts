import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModule } from './user.module';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers(): Promise<UserModule[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<UserModule> {
        return this.userService.findOne(id);
    }

    @Post()
    async createUser(
        @Body(ValidationPipe) createUserDto: CreateUserDto,
    ): Promise<UserModule> {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    ): Promise<UserModule> {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ ok?: number, n?: number }> {
        return this.userService.delete(id);
    }
}
