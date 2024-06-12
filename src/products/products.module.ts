import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity, ProductImage } from './entities';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ProductEntity, ProductImage]),
    AuthModule,
  ],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
