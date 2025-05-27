


function mostrarProductosConfirmacion(){
    
    const sectionCarrito = document.getElementById("sectionProductosConfirmar");

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    
    carrito.forEach(cadaProductoDelCarrito => {

        const contenedor = document.createElement("div");
        contenedor.className = "card";

        const subtotal = cadaProductoDelCarrito.precio * cadaProductoDelCarrito.cantidad;

        
        
        const cantidadElemento = document.createElement("h4");
        cantidadElemento.textContent = `Cantidad: ${cadaProductoDelCarrito.cantidad}`;
        const subtotalElemento = document.createElement("h4");
        subtotalElemento.textContent = `Subtotal: $${subtotal}`;
        

        contenedor.innerHTML = `
                <div class="producto"> 
                    <h3>Producto: ${cadaProductoDelCarrito.nombre}</h3>
                    <h4>Categoría: ${cadaProductoDelCarrito.categoria}</h4>
                    <h4>Precio unitario: $${cadaProductoDelCarrito.precio}</h4>
                </div>
            `;
        
        const productoDiv = contenedor.querySelector(".producto");
        productoDiv.appendChild(cantidadElemento);
        productoDiv.appendChild(subtotalElemento);

        sectionCarrito.appendChild(contenedor);
    } );
    
    const total = carrito.reduce((acum, producto) => acum + producto.precio * producto.cantidad, 0);

    const totalAPagarH2 = document.createElement("h2");
    totalAPagarH2.textContent = `Total a pagar: $${total}`;

    sectionCarrito.appendChild(totalAPagarH2);


}
mostrarProductosConfirmacion();



/*
funcionValidadora que tome los datos del formulario si estan retorne true y si no estan false
*/
function funcionValidadora() {
    const form = document.getElementById("formConfirmarCompra");
    
    if (!form.checkValidity()) {
        form.reportValidity(); 
        return false;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const tarjetaTipo = document.getElementById("tipoTarjeta").value.trim();
    const tarjetaNumero = document.getElementById("numeroTarjeta").value.trim();
    const provincia = document.getElementById("provincia").value.trim();
    const localidad = document.getElementById("localidad").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const aceptaTerminos = document.getElementById("terminosYCondicionesCheck").checked;


    const datosCliente = {
        nombreCompleto: {
            nombre,
            apellido
        },
        contacto: {
            email,
            telefono
        },
        tarjeta: {
            tipo: tarjetaTipo,
            numero: tarjetaNumero
        },
        direccion: {
            provincia,
            localidad,
            calleYnumero: direccion
        },
        mensaje,
        aceptaTerminos
    };

    return datosCliente;



}



function buttonConfirmarCompra() {
    const button = document.getElementById("buttonConfirmarCompra");

    if (!button) {
        console.error("No se encontró el botón con ID 'buttonConfirmarCompra'");
        return;
    }

    button.addEventListener("click", () => {
        
        const datosCliente = funcionValidadora()

        if ( !datosCliente ){   //si no estan los datos enteros sale de la funcion buttonConfirmarCompra() o en un futuro le ponemos un swit alert que diga que faltandatos
                Swal.fire({
                    icon: "error",
                    title: "Formulario incompleto",
                    text: "Por favor, completá todos los campos obligatorios antes de confirmar la compra.",
                    confirmButtonText: "Entendido",
                    confirmButtonColor: "red"
                });
            return;
        }


        Swal.fire({
            title: "¿Confirmar compra?",
            text: "Una vez confirmada no se podrá modificar el pedido.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red",
            confirmButtonText: "Sí, confirmar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                
                const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

                const compra = {
                    cliente: datosCliente,
                    productos: carritoActual,
                };

                const comprasAnteriores = JSON.parse(localStorage.getItem("compraRealizada")) || [];
                comprasAnteriores.push(compra);
                localStorage.setItem("compraRealizada", JSON.stringify(comprasAnteriores));

                localStorage.removeItem("carrito");

                Swal.fire({
                    title: "¡Compra realizada!",
                    text: "Gracias por tu compra. Recibirás información vía mail con los datos del envío.",
                    icon: "success",
                    confirmButtonText: "Volver al inicio"
                }).then(() => {
                    window.location.href = "../index.html";
                });
            }
        });
    });
}

buttonConfirmarCompra();