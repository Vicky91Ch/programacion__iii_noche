import { Controller, Get, Param, Post, Body, Put, Patch, Delete } from '@nestjs/common';
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
}
