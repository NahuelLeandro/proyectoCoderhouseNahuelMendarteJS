



async function fetchData() {
    try {
        const respuesta = await fetch('../data/productos.json'); // la ruta relativa al archivo tiene que mirarse desde el donde estamos
        const data = await respuesta.json();
        return data;
        
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}










let sectionProductos = document.getElementById("sectionProductos");


function renderProductos(productosArray){
    
    //por si el carrito tiene algo previo
    let carritoPrevio = JSON.parse(localStorage.getItem('carrito'));

    let productosAgregadosAlCarrito = [];
    if( carritoPrevio ){
        productosAgregadosAlCarrito = carritoPrevio;
    }



    productosArray.forEach( producto => {




        const contenedor = document.createElement("div");//creamos un div
        contenedor.className= "card";//le damos una clase
        
        let spanCounter = 0;
        productosAgregadosAlCarrito.forEach( productosPrevios => {
            if (productosPrevios.id === producto.id){
                spanCounter = productosPrevios.cantidad;
            }
        })


        contenedor.innerHTML = `<h3>Producto: ${producto.nombre}</h3>
                                <h4>Categoria ${producto.categoria}</h4>
                                <h4>Precio $${producto.precio}</h4>
                                <button class="productoAgregarCarrito" id="${producto.id}">Agregar al carrito</button>
                                <div>
                                    <button class="plus-button">+</button>
                                    <span class="counter">${spanCounter}</span>
                                    <button class="minus-button">-</button>
                                </div>
                                `;
        
        sectionProductos.appendChild(contenedor);//mandamos la estructura que creamos a el nodo products
        
        
        
        // Referencias a los elementos de este producto
        const botonAgregar = contenedor.querySelector(".productoAgregarCarrito");
        const botonSumar = contenedor.querySelector(".plus-button");
        const botonRestar = contenedor.querySelector(".minus-button");
        const contadorSpan = contenedor.querySelector(".counter");
        
        // Variable contador para este producto
        let contador = spanCounter;
        

        function actualizarCarrito() {
            const existente = productosAgregadosAlCarrito.find(item => item.id === producto.id);

            if (contador > 0) {
                if (existente) {
                    existente.cantidad = contador;
                } else {
                    productosAgregadosAlCarrito.push({
                        id: producto.id,
                        nombre: producto.nombre,
                        categoria: producto.categoria,
                        precio: producto.precio,
                        cantidad: contador
                    });
                }
            } else {
                // Si el contador llega a 0, lo sacamos del array
                if (existente) {
                    productosAgregadosAlCarrito = productosAgregadosAlCarrito.filter(item => item.id !== producto.id);
                }
            }

            localStorage.setItem("carrito", JSON.stringify(productosAgregadosAlCarrito));
        }



        botonAgregar.onclick = () => {
            contador++;
            contadorSpan.textContent = contador;
            actualizarCarrito()
            mostrarToast("agregar");
        };
        
        botonSumar.onclick = () => {
            contador++;
            contadorSpan.textContent = contador;
            actualizarCarrito();
            mostrarToast("agregar");
        };
        
        botonRestar.onclick = () => {
            if (contador > 0) {
                contador--;
                contadorSpan.textContent = contador;
                actualizarCarrito();
                mostrarToast("sacar");
            }
        };
        

        function mostrarToast(agregarOSacar) {
            if (agregarOSacar === "agregar"){
                
                Toastify({

                    text: "Producto agregado al carrito",
                    duration: 1500,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "green"
                    }

                }).showToast();



            }else if( agregarOSacar === "sacar"){

                Toastify({

                    text: "Producto quitado del carrito",
                    duration: 1500,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "red"
                    }


                }).showToast();


            }
        }




    });


}




const todosLosProductos = document.getElementById("todosLosProductos");
const soloSahumerios = document.getElementById("soloSahumerios");
const soloPiedras = document.getElementById("soloPiedras");
const soloCremas = document.getElementById("soloCremas");



async function inicio() {
    const productos = await fetchData(); // productos es un array

    renderProductos(productos);

    // botones que filtran
    todosLosProductos.onclick = () => {
        sectionProductos.innerHTML = "";
        renderProductos(productos);
    };

    soloSahumerios.onclick = () => {
        sectionProductos.innerHTML = "";
        const filtrados = productos.filter(producto => producto.categoria === "Sahumerios");
        renderProductos(filtrados);
    };

    soloPiedras.onclick = () => {
        sectionProductos.innerHTML = "";
        const filtrados = productos.filter(producto => producto.categoria === "Piedras");
        renderProductos(filtrados);
    };

    soloCremas.onclick = () => {
        sectionProductos.innerHTML = "";
        const filtrados = productos.filter(producto => producto.categoria === "Cremas");
        renderProductos(filtrados);
    };
}

inicio();
