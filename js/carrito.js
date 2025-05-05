


// Traemos el carrito del localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const sectionCarrito = document.getElementById("sectionCarrito");








function mostrarCarrito(sectionCarrito){

    carrito.forEach(cadaProducto => {
        // Buscamos el producto original por ID
        const producto = carrito.find(p => p.id === cadaProducto.id);

        if (producto) {
            const contenedor = document.createElement("div");
            contenedor.className = "card";

            const subtotal = producto.precioUnitario * cadaProducto.cantidad;

            contenedor.innerHTML = `
                <h3>Producto: ${producto.nombre}</h3>
                <h4>Categoría: ${producto.categoria}</h4>
                <h4>Precio unitario: $${producto.precioUnitario}</h4>
                <h4>Cantidad: ${cadaProducto.cantidad}</h4>
                <h4>Subtotal: $${subtotal}</h4>
                <button class="eliminarProductoIndividual" >Eliminar producto</button>
            `;



            contenedor.querySelector(".eliminarProductoIndividual").addEventListener("click", () => {
                // Eliminar del DOM
                contenedor.remove();

                // Eliminar del array del carrito
                const nuevoCarrito = carrito.filter(p => p.id !== cadaProducto.id);

                carrito.length = 0;
                carrito.push(...nuevoCarrito);

                // Actualizar localStorage
                localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

            });


            sectionCarrito.appendChild(contenedor);

        }
    });

}

mostrarCarrito(sectionCarrito);






const sectionTotales = document.getElementById("sectionTotales");

function mostrarTotal(sectionTotales){
    


    const totalAcumuladoDiv = document.createElement("div");
    totalAcumuladoDiv.innerHTML = `
        <button class="calcularTotal" >¿Quiere ver el total de todos sus productos?</button>
        <div class="resultadoTotal"></div>
                                    `;
    sectionTotales.appendChild(totalAcumuladoDiv);

    const boton = totalAcumuladoDiv.querySelector(".calcularTotal");
    const resultado = totalAcumuladoDiv.querySelector(".resultadoTotal");

    boton.addEventListener("click", () => {
        
        const total = carrito.reduce((acum, producto) => {
            return acum + (producto.precioUnitario * producto.cantidad);
        }, 0);

        resultado.innerHTML = `<h2>El total acumulado es: $${total}</h2>`;
    });
}

mostrarTotal(sectionTotales);


const eliminarCarrito = document.getElementById("eliminarCarrito");

eliminarCarrito.onclick = () =>{
    localStorage.removeItem('carrito');
    sectionCarrito.innerHTML = "";
    sectionTotales.innerHTML = "";
    sectionCarrito.innerHTML = "<p>El carrito está vacío.</p>";
}