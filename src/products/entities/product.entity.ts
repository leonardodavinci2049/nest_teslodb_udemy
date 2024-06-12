import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './';
import { UserEntity } from '../../auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class ProductEntity {
  @ApiProperty({
    type: 'string',
    description: 'Product ID: The unique identifier of the product',
    format: 'uuid',
    example: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: 'string',
    description: 'Product Title: The title of the product',
    example: 'T-shirt',
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({
    type: 'number',
    description: 'Product Price: The price of the product',
    example: 25.99,
  })
  @Column('float', {
    default: 0,
  })
  price: number;

  @ApiProperty({
    type: 'string',
    description: 'Product Description: The description of the product',
    example: 'This is a T-shirt',
  })
  @ApiProperty({
    type: 'string',
    description: 'Product Description: The description of the product',
    example: 'This is a T-shirt',
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ApiProperty({
    type: 'string',
    description: 'Product Slug: The slug of the product',
    example: 't-shirt',
  })
  @Column('text', {
    unique: true,
  })
  slug: string;

  @ApiProperty({
    type: 'number',
    description: 'Product Stock: The stock of the product',
    example: 100,
  })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty({
    type: 'string',
    description: 'Product Category: The category of the product',
    example: 'T-shirt',
  })
  @Column('text', {
    array: true,
  })
  sizes: string[];

  @ApiProperty({
    type: 'string',
    description:
      'Et nulla id est consectetur labore ea cupidatat adipisicing eu sit. ',
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    type: 'string',
    description: 'Product Category: The category of the product',
    example: 'T-shirt',
  })
  @Column('text', {
    array: true,
    nullable: true,
  })
  tags: string[];

  @ApiProperty()
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ManyToOne(() => UserEntity, (user) => user.product, { eager: true })
  user: UserEntity;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
