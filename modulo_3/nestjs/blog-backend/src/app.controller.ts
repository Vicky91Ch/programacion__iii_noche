import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // ruta principal '/'
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health') // ruta '/health'
  getHealth(): object {
    return this.appService.health();
  }
}
