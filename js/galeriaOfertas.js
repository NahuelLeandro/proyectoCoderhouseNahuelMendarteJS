



async function fetchData() {
    try {

        const ruta = location.pathname.includes('/pages/')
            ? '../data/productos.json'  // si estamos dentro de /pages
            : './data/productos.json';  // si estamos en la raíz



        const respuesta = await fetch(ruta); // la ruta relativa al archivo tiene que mirarse desde el donde estamos
        const data = await respuesta.json();
        return data;
        
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}


function renderGaleria(productos) {
    const galeria = document.getElementById("galeria-ofertas");
    galeria.innerHTML = ""; // Limpiamos el contenido anterior

    productos.forEach(prod => {
        const div = document.createElement("div");
        div.className = "galeria_imagenes_item";
        div.innerHTML = `
            <h3>${prod.nombre}</h3>
            <p>Categoría: ${prod.categoria}</p>
            <p>Precio: $${prod.precio}</p>
        `;
        galeria.appendChild(div);
    });


}







async function separarCategorias() {
    const productos = await fetchData();
    
    const sahumerios = productos.filter(p => 
        [1, 2, 4, 6].includes(p.id) && p.categoria === "Sahumerios"
    );

    const piedras = productos.filter(p => 
        [7, 8, 10, 11].includes(p.id) && p.categoria === "Piedras"
    );

    const cremas = productos.filter(p => 
        [13, 15, 16, 18].includes(p.id) && p.categoria === "Cremas"
    );
    
    
    
    // console.log(sahumerios)
    // console.log(piedras)
    // console.log(cremas)    

    
    return [sahumerios, piedras, cremas];
}




let intervaloRotacion;
let indiceActual = 0;

async function iniciarRotacionGaleria() {
    const categorias = await separarCategorias(); // [sahumerios, piedras, cremas]

    // Mostramos la primera categoría al iniciar
    renderGaleria(categorias[indiceActual]);

    // Rotamos cada 5 segundos
    intervaloRotacion = setInterval(() => {
        indiceActual = (indiceActual + 1) % categorias.length;
        renderGaleria(categorias[indiceActual]);
    }, 5000); // 5 segundos

}

iniciarRotacionGaleria();