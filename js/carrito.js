function mostrarCarrito(){

    const sectionCarrito = document.getElementById("sectionCarrito");

    // Traemos el carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        sectionCarrito.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }




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
                <div class="botones"> 
                    <button class="plus-button">+</button>
                    <span class="counter"></span>
                    <button class="minus-button">-</button>
                    <button class="eliminarProductoIndividual">Eliminar producto</button>
                </div>
            `;
        
        const productoDiv = contenedor.querySelector(".producto");
        productoDiv.appendChild(cantidadElemento);
        productoDiv.appendChild(subtotalElemento);




        const botonSumar = contenedor.querySelector(".plus-button");
        const botonRestar = contenedor.querySelector(".minus-button");
        const contadorSpan = contenedor.querySelector(".counter");
        const eliminarProductoIndividual = contenedor.querySelector(".eliminarProductoIndividual");


        // Variable para el <span class="counter"></span>   
        let contador = cadaProductoDelCarrito.cantidad;
        contadorSpan.textContent = contador;
        

        function actualizarCarrito(accion) {
            
            const index = carrito.findIndex(item => item.id === cadaProductoDelCarrito.id);


            switch (accion){
                case "sumar":

                    contador++;
                    carrito[index].cantidad = contador;
                    cantidadElemento.textContent = `Cantidad: ${contador}`;
                    subtotalElemento.textContent = `Subtotal: $${cadaProductoDelCarrito.precio * contador}`;
                    
                    break;


                case "restar":

                    if(contador > 0 ){
                        contador--;
                        carrito[index].cantidad = contador;
                        cantidadElemento.textContent = `Cantidad: ${contador}`;
                        subtotalElemento.textContent = `Subtotal: $${cadaProductoDelCarrito.precio * contador}`;
                    }

                    break;
        

                case "eliminar":
        
                    contenedor.remove();
                    carrito.splice(index, 1);
                    
                    if (carrito.length === 0) {
                        document.getElementById("sectionCarrito").innerHTML = "<p>El carrito está vacío.</p>";
                        document.getElementById("sectionTotales").innerHTML = "";
                        document.getElementById("eliminarCarrito").innerHTML = "";
                        localStorage.removeItem("carrito");
                        return;
                    }

                    break;
                
                default:
                    console.error("No entro en ningun case", error);

            }
            contadorSpan.textContent = contador;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarTotal(carrito, resultadoTotal);
            confirmarCompra();
        }



        
        botonSumar.onclick = () => {
            actualizarCarrito("sumar");
            mostrarToast("agregar");
        };
        
        botonRestar.onclick = () => {
            actualizarCarrito("restar");
            mostrarToast("sacar")
        };

        eliminarProductoIndividual.onclick = () => {
            Swal.fire({
                title: "¿Eliminar producto?",
                text: "Se eliminarn todos los items de este producto.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "red",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    actualizarCarrito("eliminar");
                    mostrarToast("eliminar");

                    Swal.fire({
                        title: "Eliminados",
                        text: "Todos los items del producto fueron eliminados",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            });
        };

        
        function mostrarToast( agregarSacarOEliminar ){
            
            switch (agregarSacarOEliminar){
                case "agregar":
                    Toastify({

                        text: "Producto agregado al carrito",
                        duration: 1500,
                        gravity: "top",
                        position: "right",
                        style: {
                            background: "green"
                        }

                    }).showToast();
                    break;
                case "sacar":
                    Toastify({

                        text: "Producto quitado del carrito",
                        duration: 1500,
                        gravity: "top",
                        position: "right",
                        style: {
                            background: "red"
                        }

                    }).showToast();
                    break;

                case "eliminar":
                    
                    Toastify({

                        text: "Producto eliminado del carrito",
                        duration: 1500,
                        gravity: "top",
                        position: "right",
                        style: {
                            background: "red"
                        }


                    }).showToast();

                    break;

            }

        }




        sectionCarrito.appendChild(contenedor);

        
    });
    actualizarTotal(carrito, resultadoTotal);
    
}




const sectionTotales = document.getElementById("sectionTotales");
const resultadoTotal = document.createElement("div");
sectionTotales.appendChild(resultadoTotal);

mostrarCarrito();




function actualizarTotal( carrito, resultadoTotal ){
    
    if(carrito.length === 0 ){
        resultadoTotal.innerHTML = "<p>El Carrito esta vacio.</p>" 
        confirmarCompra();
        return;
    }

    const total = carrito.reduce((acum, itemCarrito) => {
            return acum + (itemCarrito.precio * itemCarrito.cantidad);
    }, 0);

    resultadoTotal.innerHTML = `<h2>El total acumulado es: $${total}</h2>`;
}





function renderBotonEliminarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length !== 0) {
        const eliminarCarritoSection = document.getElementById("eliminarCarrito");
        eliminarCarritoSection.innerHTML = "";

        const botonEliminarCarrito = document.createElement("button");
        botonEliminarCarrito.textContent = `¿Desea eliminar todo el carrito?`;
        eliminarCarritoSection.appendChild(botonEliminarCarrito);

        botonEliminarCarrito.onclick = () => {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Se eliminarán todos los productos del carrito.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "red",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("carrito");
                    document.getElementById("sectionCarrito").innerHTML = "<p>El carrito está vacío.</p>";
                    document.getElementById("sectionTotales").innerHTML = "";
                    eliminarCarritoSection.innerHTML = "";

                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "El carrito ha sido vaciado.",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false
                    });

                    confirmarCompra();
                }
            });
        };
    }
}
renderBotonEliminarCarrito();





function confirmarCompra(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const confirmarCompraSection = document.getElementById("confirmarCompra");
    confirmarCompraSection.innerHTML = "";

    if (carrito.length !== 0) {

        const ancorConfirmarCompra = document.createElement("a");
        ancorConfirmarCompra.href = "confirmarCompra.html"

        const bottonConfirmarCompra = document.createElement("button");
        bottonConfirmarCompra.textContent = "¡CONFIRMAR COMPRA! e ir a medios de pago";
        
        ancorConfirmarCompra.appendChild( bottonConfirmarCompra);
        confirmarCompraSection.appendChild(ancorConfirmarCompra);
        
    }

}

confirmarCompra();