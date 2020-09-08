import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupModule } from './group/group.module';
import { UserModule } from './user/user.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    UserModule,
    GroupModule,

    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_STRING,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
