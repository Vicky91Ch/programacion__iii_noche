const mensaje = document.getElementById('mensaje');
mensaje.textContent="Actualizado desde Alquiler de vehiculos JS";
mensaje.style.color="blue";

const link=document.getElementById('link');
link.setAttribute('href','https://www.google.com');
link.classList.add('boton');
link.textContent="Ir a Google";