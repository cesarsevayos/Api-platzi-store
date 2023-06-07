import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  findAll() {
    return this.customerModel.find().exec();
  }

  async findOne(id: string) {
    return this.customerModel.findById(id);
  }

  create(data: CreateCustomerDto) {
    //Crea un objeto del modelo:
    const newCustomer = new this.customerModel(data);
    return newCustomer.save();
  }

  // async update(id: string, changes: UpdateCustomerDto) {
  //   const customer = await this.customerModel.findOne({ where: { id } });
  //   this.customerModel.merge(customer, changes);
  //   return this.customerModel.save(customer);
  // }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
