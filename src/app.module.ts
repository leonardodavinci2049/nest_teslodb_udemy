import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { EnvConfig } from 'src/core/config/env.config';
import { JoiValidationSchema } from 'src/core/config/joi.validations';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { writeFileSync } from 'fs';
import { ProductsModule } from './products/products.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      // O objetivo é que o TypeORM carregue automaticamente as entidades de nosso aplicativo.
      // em produção é recomendado desativar o autoLoadEntities e carregar manualmente as entidades
      autoLoadEntities: true,
      // O objetivo é que o TypeORM sincronize automaticamente o esquema de banco de dados com as entidades de nosso aplicativo.
      // em produção é recomendado desativar o synchronize e fazer as migrações manualmente
      synchronize: true,
    }),
    ProductsModule,
    SeedModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  /*  constructor() {
    // console.log(process.env);
    writeFileSync('.env.json', JSON.stringify(process.env));
  } */
}
