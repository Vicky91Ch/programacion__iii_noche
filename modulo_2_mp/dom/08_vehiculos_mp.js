const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorVehiculos');
let vehiculos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const direccion = document.getElementById('direccion').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());

  if (direccion && descripcion && !isNaN(precio)) {
    const nuevoVehiculo = { id: Date.now(), direccion, descripcion, precio };
    vehiculos.push(nuevoVehiculo);
    renderizarVehiculo(nuevoVehiculo);
    formulario.reset();
  }
});

function renderizarVehiculo({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'vehiculo';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${direccion}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.vehiculo');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    vehiculos = vehiculos.filter(c => c.id !== id);
    tarjeta.remove();
  }
});