
import { Exclude } from 'class-transformer';

import { Order } from './order.entity';
import { Product } from '../../products/entities/product.entity';

export class OrderItem {
  id: number;


  quantity: number;

  product: Product;

  order: Order;
}
