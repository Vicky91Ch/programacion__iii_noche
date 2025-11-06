const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'red';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'blue';
});
caja.addEventListener('click', () => {
    alert("!clickeaste la caja¡");
});