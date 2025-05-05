



class Producto{

    static id = 0;
    constructor ( nombre , categoria , precio ){
        this.id= ++Producto.id,
        this.nombre = nombre,
        this.categoria = categoria,
        this.precio = precio
    }
}

const producto1= new Producto( "Sandalo" , "Sahumerios" , 150 );
const producto2= new Producto( "Palo Santo" , "Sahumerios" , 150 );
const producto3= new Producto( "Champa" , "Sahumerios" , 200 );
const producto4= new Producto( "Mirra" , "Sahumerios" , 200 );
const producto5= new Producto( "Incienso" , "Sahumerios" , 300 );
const producto6 = new Producto("Citronella", "Sahumerios" , 250 );

const producto7= new Producto( "Aguamarina" , "Piedras" , 2200 );
const producto8= new Producto( "Turmalina" , "Piedras" , 1200 );
const producto9= new Producto( "Cuarzo rosa" , "Piedras" , 3000 );
const producto10= new Producto( "Granate" , "Piedras" , 1500 );
const producto11= new Producto( "Alejandrita" , "Piedras" , 2000 );
const producto12= new Producto( "Citrino" , "Piedras" , 2300 );

const producto13= new Producto( "Árnica y Caléndula" , "Cremas" , 800 );
const producto14= new Producto( "Lavanda y Manzanilla" , "Cremas" , 750 );
const producto15= new Producto( "Rosa Mosqueta" , "Cremas" , 900 );
const producto16= new Producto( "Sándalo y Patchouli" , "Cremas" , 750 );
const producto17= new Producto( "Aloe Vera y Menta" , "Cremas" , 950 );
const producto18= new Producto( "Eucalipto y Romero" , "Cremas" , 750 );

const productos = [];
productos.push( producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18 );



let carritoPrevio = JSON.parse(localStorage.getItem('carrito'));

let sectionProductos = document.getElementById("sectionProductos");

let productosAgregadosAlCarrito = [];
if( carritoPrevio ){
    productosAgregadosAlCarrito = carritoPrevio;
}



function renderProductos(productosArray){
    
    productosArray.forEach( producto => {
        const contenedor = document.createElement("div");//creamos un div
        contenedor.className= "card";//le damos una clase
        
        contenedor.innerHTML = `<h3>Producto: ${producto.nombre}</h3>
                                <h4>Categoria ${producto.categoria}</h4>
                                <h4>Precio $${producto.precio}</h4>
                                <button class="productoAgregarCarrito" id="${producto.id}">Agregar al carrito</button>
                                <div>
                                    <button class="plus-button">+</button>
                                    <span class="counter">0</span>
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
        let contador = 0;
        

        
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
                        precioUnitario: producto.precio,
                        cantidad: contador
                    });
                }
            }else {
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
        };
        
        botonSumar.onclick = () => {
            contador++;
            contadorSpan.textContent = contador;
            actualizarCarrito()
        };
        
        botonRestar.onclick = () => {
            if (contador > 0) {
                contador--;
                contadorSpan.textContent = contador;
                actualizarCarrito()
            }
        };
        
    });


}




const todosLosProductos = document.getElementById("todosLosProductos");
const soloSahumerios = document.getElementById("soloSahumerios");
const soloPiedras = document.getElementById("soloPiedras");
const soloCremas = document.getElementById("soloCremas");

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




renderProductos(productos);


