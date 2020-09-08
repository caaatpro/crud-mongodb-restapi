import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGroupDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}