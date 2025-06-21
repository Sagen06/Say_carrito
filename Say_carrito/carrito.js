const carrito = [];
const lista = document.getElementById('carrito');
const pedidoInput = document.getElementById('pedido');

document.querySelectorAll('.agregar').forEach(btn => {
  btn.addEventListener('click', e => {
    const producto = e.target.parentElement;
    const id = producto.dataset.id;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    carrito.push({ id, nombre, precio });
    mostrarCarrito();
  });
});

function mostrarCarrito() {
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
  pedidoInput.value = JSON.stringify(carrito);
}
function validarCarrito() {
  if (carrito.length === 0) {
    alert('Por favor, agrega al menos un producto al carrito antes de confirmar el pedido.');
    return false;
  }
  return true;
}