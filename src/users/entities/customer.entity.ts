import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { User } from './user.entity';
import { Order } from './order.entity';

export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  // user: User;

  // orders: Order[];

  @Prop({
    type: [{ name: { type: String }, color: { type: String } }],
  })
  skilss: Types.Array<Record<string, any>>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
