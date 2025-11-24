const valor_cuenta=document.getElementById('valor_cuenta').value();
const personas=document.getElementById('personas');
const boton = document.getElementById('resultado_calcular_propina');

boton.addEventListener('click', () =>{
    const valor_cuenta=parseFloat(valor_cuenta);
    const personas= parseFloat(valor_cuenta);
    if (isNaN(valor_cuenta)||isNaN(personas) || valor_cuenta<=0 || personas<0){
        resultado.innerHTML(
            <p><b>Valores no validos</b></p>
        )
    }else{
    const resultadoPorcentaje = valor_cuenta * parseFloat(porcentaje_propina)
    const valor_por_persona = resultadoPorcentaje / personas;
    resultado.innerHTML(
        <p><b>Valores no validos</b></p>
    )
}
})