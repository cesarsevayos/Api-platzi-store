import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Product } from './product.entity';

@Schema()
export class Brand {
  @Prop({ required: true })
  name: string;
  @Prop()
  image: string;
  //products: Product[];
}
