import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Users')
  .setDescription('Test CRUD')
  .setVersion('1.0')
  .addTag('users')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('users', app, document);

  await app.listen(3000);
}
bootstrap();
