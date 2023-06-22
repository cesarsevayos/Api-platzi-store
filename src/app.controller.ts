import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key.guard';
import { Public } from './auth/decorators/public.decorators';
@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks() {
    return this.appService.getTasks();
  }

  @Get('/prueba')
  @Public()
  getTasksPrueba() {
    return 'Retornando con prueba';
  }

  @Get('/prueba2')
  getTasksPrueba2() {
    return 'Retornando con prueba';
  }
}
