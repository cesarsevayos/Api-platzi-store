import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
import { Order } from '../entities/order.entity';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  //El populate resuelve los joins para las referencias que tenga con otros documentos o schemas
  findAll() {
    return this.orderModel
      .find()
      .populate('customer')
      .populate('products')
      .exec();
  }

  async findOne(id: string) {
    return this.orderModel.findById(id);
  }

  // async create(data: CreateOrderDto) {
  //   const newOrder = new Order();
  //   if (data.customerId) {
  //     const customer = await this.customerRepo.findOne({
  //       where: { id: data.customerId },
  //     });
  //     newOrder.customer = customer;
  //   }
  //   return this.orderModel.save(newOrder);
  // }

  // async update(id: number, changes: UpdateOrderDto) {
  //   const order = await this.orderRepo.findOne({ where: { id } });
  //   if (changes.customerId) {
  //     const customer = await this.customerRepo.findOne({
  //       where: { id: changes.customerId },
  //     });
  //     order.customer = customer;
  //   }
  //   return this.orderRepo.save(order);
  // }

  remove(id: string) {
    return this.orderModel.findByIdAndDelete(id);
  }

  async removeProduct(id: string, productId: string) {
    const order = await this.orderModel.findById(id);
    order.products.pull(productId);
    return order.save();
  }

  async addProducts(id: string, productsIds: string[]) {
    const order = await this.orderModel.findById(id);
    productsIds.forEach((item) => order.products.push(item));
    return order.save();
  }
}
