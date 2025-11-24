import { Controller, Get, Param, Post, Body, Put, Patch, Delete, Query } from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Get()
  myFirstGet(): object {
    return this.basicsService.myFirstGet();
  }

  @Get('my-second-get')
  mySecondGet(): object {
    return this.basicsService.mySecondGet();
  }

  @Get(':myParameter')
  requestWithParameter(@Param('myParameter') myParameter: string): object {
    return this.basicsService.functionWithParameter(myParameter);
  }

  @Post()
  create(@Body() bodyData: object) {
    return this.basicsService.functionWithPost(bodyData);
  }

  @Put(':id')
  update(
    @Param('id') id:string,
    @Body() updateBody: object){
    return this.basicsService
        .updateWithPut(id, updateBody);
    }
   @Patch(':id')
    updatePatch(
      @Param('id') id:string,
      @Body() updateBody: object){
      return this.basicsService
          .updateWithPatch(id, updateBody);
    }
    @Delete(':id')
    delete(
      @Param('id') id:string
      ) {
      return this.basicsService.delete(id);
    }
    @Post('licencia-conducir')
    licencia(@Body() bodyData: object) {
      return this.basicsService
        .licencia(bodyData);
    }
    @Post('area-triangulo')
    areaTriangulo(@Body() bodyData: object){
      return this.basicsService
        .areaTriangulo(bodyData);
    }
    @Post('calcular-mayor')
    calcularMayor(@Body() bodyData: object){
      return this.basicsService
      .calcularMayor(bodyData);
    }
    @Get('calcular-promedio/:nota1/:nota2/:nota3')
    promedio(
      @Param('nota1') nota1: number,
      @Param('nota2') nota2: number,
      @Param('nota3') nota3: number,
    ){
      return this.basicsService
        .calcularPromedio(nota1,nota2,nota3);
    }
    @Get('verificar-credito-hipotecario')
    verificarCredito(
      @Query('edad') edad:string,
      @Query('ingreso')ingreso: string,
      @Query('historialCrediticio') historialCrediticio: string,){
      return this.basicsService
        .verificarCredito(+edad,+ingreso,historialCrediticio);
    }
}
