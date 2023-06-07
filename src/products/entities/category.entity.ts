import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Product } from './product.entity';

@Schema()
export class Category {
  @Prop({ required: true })
  name: string;
  //products: Product[];
}
