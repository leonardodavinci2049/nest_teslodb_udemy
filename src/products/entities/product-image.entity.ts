import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  url: string;
  // @Column('text')
  // publicId: string;
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
  // @BeforeInsert()
  // generateId() {
  //   this.id = uuidv4();
  // }
}
