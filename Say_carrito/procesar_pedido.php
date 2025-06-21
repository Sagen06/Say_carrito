<?php
$conexion = new mysqli("localhost", "root", "", "tienda");

if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}

$pedido = json_decode($_POST['pedido'], true);

foreach ($pedido as $producto) {
  $stmt = $conexion->prepare("INSERT INTO pedidos (producto_id, nombre, precio) VALUES (?, ?, ?)");
  $stmt->bind_param("isd", $producto['id'], $producto['nombre'], $producto['precio']);
  $stmt->execute();
}
echo "<script>
  alert('¡Pedido confirmado con éxito!');
  window.location.href = 'index.html';
</script>";

echo "Pedido procesado correctamente.";
$conexion->close();
?>