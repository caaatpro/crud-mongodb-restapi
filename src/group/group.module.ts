import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupSchema } from './schemas/group.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }])],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule {}
