import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';
import { Schema } from 'mongoose';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    readonly lastName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly gender: string;

    @ApiProperty()
    readonly groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }];

    @ApiProperty()
    readonly friends: [{ type: Schema.Types.ObjectId, ref: 'User' }];
}