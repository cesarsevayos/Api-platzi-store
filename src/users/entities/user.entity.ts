
import { Customer } from './customer.entity';

export class User {
  id: number;

  email: string;

  password: string; // encript

  role: string;

  updateAt: Date;
  customer: Customer;
}
