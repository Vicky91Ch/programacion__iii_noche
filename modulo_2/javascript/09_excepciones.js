try{
    const user = JSON.parse('{"nombre": "Juan", "edad": 30}' );
}catch (e){
    console.log('Error detectado', e.message);

}

try{
    console.log("Intentando abrir archivo ....");
    throw new error('Archivo no encontrado');
}catch(error){
    console.log("Error:", error.message);
}finally{
    console.log("Finalizó el intento de abrir archivo");
}