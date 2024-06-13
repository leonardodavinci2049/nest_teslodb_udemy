/*  ""import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap')
  
  app.setGlobalPrefix('/api')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that do not have decorators
      transform: true, // transform payload to DTO instances
      forbidNonWhitelisted: true, // throw error if payload has properties that do not have decorators
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );
 
  const config = new DocumentBuilder()
    .setTitle('Teslo RestFull Api')
    .setDescription('Teslo shop endpoints')
    .setVersion('1.0').addServer('http://localhost:3000/').addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth()in your controller!
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT);
  logger.log(`App running on port ${process.env.PORT}`)
}
bootstrap();
 
auth.controller:

  @Get('/private3')
  @ApiBearerAuth('JWT-auth')
  // @Auth(ValidRoles.admin, ValidRoles.superUser)
  @Auth() // con cualquier usuario q este en bd y con cualquier rol q tenga 
  testPivateRoute3(@GeTUser() user: User) {
    return {
      ok: true,
      user
    }
  }  */
