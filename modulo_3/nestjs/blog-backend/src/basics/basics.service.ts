import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
  myFirstGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get',
      message: 'My new get',
    };
  }

  mySecondGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics second get',
      message: 'My second get',
    };
  }

  functionWithParameter(parameter: string): object {
    return {
      service: 'Blog Backend API',
      function: 'basic get with parameter',
      message: 'Función con parámetro',
      parameter: parameter,
    };
  }

  functionWithPost(data: any): object {
    return {
      service: 'Blog Backend API',
      function: 'basic post with parameter', // Cambiado para reflejar POST
      message: 'Función con datos recibidos por POST',
      data: data,
    };
  }
  updateWithPut(parameter: string,
    body: object
  ): object {
    return{
        service:'Blag Backend API',
        function:'basics peticion put',
        message:'Funcion con parametro',
        parameter:parameter,
        body: body
    }
  }
  updateWithPatch(parameter: string,
    body: object
  ): object {
    return{
        service:'Blag Backend API',
        function:'basics peticion patch',
        message:'Funcion con parametro',
        parameter:parameter,
        body: body
    }
  }
  delete(parameter: string) : object {
    return{
        service:'Blag Backend API',
        function:'basics peticion Delete',
        message:'Funcion para borrar',
        parameter:parameter,
    };
  }
  licencia(body: any): object {
    let respuesta: string;
    if (body.edad > 17 && body.licencia) {
      respuesta = 'Puede conducir';
    } else if (body.edad > 17) {
      respuesta = 'Debe sacar licencia';
    } else {
      respuesta = 'es menor de edad';
    }
    return {
      service: 'Blog Backend API',
      function: 'basics peticion Delete',
      message: 'Funcion para borrar',
      parameter: body,
      respuesta: respuesta,
    };
  }
}