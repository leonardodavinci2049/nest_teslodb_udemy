import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  url: string;
  // @Column('text')
  // publicId: string;
  @ManyToOne(() => ProductEntity, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: ProductEntity;
  // @BeforeInsert()
  // generateId() {
  //   this.id = uuidv4();
  // }
}
