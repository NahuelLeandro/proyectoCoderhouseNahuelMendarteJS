Este es un sistema de un centro de salud holístico.

Por un lado, tiene un archivo galeriaOfertas.js que muestra diferentes productos en oferta y los cambia cada algunos segundos para mostrarle al cliente los distintos productos en promoción.
Este script se usa en el index.html y en eventos y capacitaciones, donde tiene un botón que te envía a productos.html.

productos.html <-> productos.js
Por otro lado, tiene la página productos.html conectada con productos.js, que muestra todos los productos disponibles en el sistema, trayéndolos desde datos.json.
Podés seleccionar alguna categoría de productos en particular con botones que muestran los productos correspondientes a la categoría seleccionada.
Con el botón "Agregar al carrito" o el "+", se van cargando en el localStorage los productos seleccionados y la cantidad. También cuenta con un botón "-" para disminuir la cantidad, y se actualiza automáticamente la nueva cantidad en el localStorage.
Se utiliza la librería Toastify para mostrar cuando se agregan o disminuyen artículos del carrito.
Una vez seleccionados los productos que se desean, se puede ir al carrito desde el nav o desde un botón "Ir al carrito".

carrito.html <-> carrito.js
Desde el carrito, se llaman los productos que el cliente tiene en el carrito desde localStorage. Pueden aumentar o disminuir la cantidad de productos (incluso a 0) con los botones "+" y "-",
y eliminar el producto entero con el botón "Eliminar producto", esto para cada producto que el cliente tenga en el carrito en ese momento.
Se muestran los datos de cada producto, y se actualizan cantidad y subtotales. Cada cambio se actualiza directamente en el localStorage.
Se usan las librerías Toastify para los cambios de cantidades de los productos, y SweetAlert para el botón "Eliminar producto".
Muestra el total acumulado actualizado en todo momento (suma los subtotales).
Tiene un botón para eliminar todo el carrito, el cual usa la librería SweetAlert; este botón elimina todo el carrito en el DOM y en el localStorage.
Por último, el botón "CONFIRMAR COMPRA e ir a medios de pago" nos lleva a la página interna confirmarCompra.html (no se encuentra desde el nav).

confirmarCompra.html <-> confirmarCompra.js
Desde la página interna de confirmar compra, se cargan los productos que estén en el localStorage en ese momento (ya no se pueden cambiar cantidades). Se le muestra al cliente el detalle de todos los productos, la cantidad y el subtotal de cada uno.
Se muestra el total a pagar (que suma los subtotales).
Se le pide al cliente los datos personales, de la tarjeta, forma de contacto, dirección, algún mensaje que quiera dejar y el check de términos y condiciones.
Está el botón "CONFIRMAR COMPRA", que usa la librería SweetAlert: si falta algún dato, muestra que el formulario está incompleto; y si están todos los datos bien, pide la confirmación de la compra.
Si se confirma la compra, se guarda en el localStorage, para cada compra realizada, los datos de cada cliente y los datos de los productos que compró. Se eliminan los productos del carrito actual.
Si se confirma la compra, SweetAlert muestra el mensaje de compra realizada y se redirecciona al index.html con un botón de volver al inicio.
