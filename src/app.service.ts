import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    //MANERA DE IMPORTAR DICHA CONEXION MANUAL DESDE EL USEFACTORY - MODULO DATABASE
  ) {}
  async getTasks() {
    // const tasksColletion = this.database.collection('tasks');
    // const resp = await tasksColletion.find().toArray();
    // console.log(resp);
    // return resp;
  }
}
