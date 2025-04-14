

//ESTE ES UN SISTEMA DE REGISTRO MODIFICACION Y ELIMINACION DE PACIENTES DE UN CENTROD DE SALUD.

const paciente1= {
    nombre: "Marta",
    apellido: "Muños",
    dni:34567189,
    sexo: "F",
    edad: 40 
}
const paciente2= {
    nombre: "Ricardo",
    apellido: "Ruben",
    dni:46879213,
    sexo: "M",
    edad: 38 
}
const paciente3= {
    nombre: "Juanita",
    apellido: "La del barrio",
    dni:75684321,
    sexo: "F",
    edad: 15
}
const paciente4= {
    nombre: "Let",
    apellido: "Ferrus",
    dni:91345678,
    sexo: "M",
    edad: 68
}

const paciente5= {
    nombre: "Venito",
    apellido: "Camela",
    dni:85274691,
    sexo: "M",
    edad: 13
}
const paciente6= {
    nombre: "Vito",
    apellido: "Corleone",
    dni: 15467894,
    sexo: "M",
    edad: 82
}

const paciente7= {
    nombre: "Charles",
    apellido: "Darwin",
    dni: 12348976,
    sexo: "M",
    edad: 140
}

const paciente8= {
    nombre: "William",
    apellido: "Shakespeare",
    dni: 76468213,
    sexo: "M",
    edad: 220
}

const paciente9= {
    nombre: "Maria",
    apellido: "Antonieta",
    dni: 67984321,
    sexo: "F",
    edad: 350
}




//cargo algunos pacientes al array para que no este vasio. simulando que ya esten en una base de datos
const pacientes = [paciente1, paciente2, paciente3, paciente4, paciente5, paciente6, paciente7, paciente8, paciente9 ];






/*  FUNCIONES   

en clases creo que pidieron que las funciones esten donde se ivan a usar y no arriba de todo, pero no estoy seguro, yo las estoy manejando asi porque me parece un poco mas claro igual estan comentadas en cada case del programa si les parece mejor, lo puse de las 2 formas pueden comentar uno y descomentar el otro. menos la funcion mostrarPacientes(pacientes) que si la dejas en el case 1 queda encerrada es ese unico scope, y lo nececito en otras partes del programa
*/

function mostrarPacientes(pacientes){
    console.log("Lista actual de pacientes:\n\n");
    for(const paciente of pacientes){
        console.log("Nombre: " + paciente.nombre + "\n" + 
                    "Apellido: " + paciente.apellido + "\n" +
                    "DNI: " + paciente.dni + "\n" +
                    "Sexo: " + paciente.sexo +"\n" +
                    "Edad: " + paciente.edad + "\n\n"
                    )
    }
}



function agregarPaciente(){
    let nombre = prompt("Nombre: ");
    let apellido = prompt("Apellido: ");
    let dni = prompt("DNI: ");
    let sexo = prompt("Sexo M/F: ").toUpperCase();
    let edad = parseInt(prompt("Edad: "));
    
    const paciente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        sexo: sexo,
        edad: edad
    }

    return paciente;
}




function pacienteAEliminar( dni, pacientes){

    let contador = 0;//contador para seguir el indice del array y poder eliminarlo con el splice()
    let flag = false;//flag para controlar la iteracion

    for(const paciente of pacientes){

        if( contador < pacientes.length){//cuando el contador sea igual a la cantidad de elementos del array es porque no se encontro el DNI

            if( paciente.dni == dni ){
                flag = true;//si encuentra el dni buscado cambia a true
            }

            //si flag es true encontro el paciente
            if(flag== true){
            

                console.log("El paciente eliminado es: \n" +
                    "Nombre: " + paciente.nombre + "\n" +
                    "Apellido: " + paciente.apellido + "\n" +
                    "DNI: " + paciente.dni + "\n" +
                    "Sexo: " + paciente.sexo + "\n" +
                    "Edad: " + paciente.edad + "\n\n"
                )


                pacientes.splice(contador,1);//se elimina el paciente 
                return ;

                
            
            }
            contador++;
        }

    }

    alert("\nNo se encontro el DNI buscado");
    return;

}



function sexoParticular( sexoParametro , pacientes ){

    console.log("Los pacientes de sexo " + sexoParametro + " son: \n\n");

    for(const paciente of pacientes){

        if( paciente.sexo === sexoParametro){
            
            console.log("Nombre: " + paciente.nombre + "\n" + 
                        "Apellido: " + paciente.apellido + "\n" +
                        "DNI: " + paciente.dni + "\n" +
                        "Sexo: " + paciente.sexo +"\n" +
                        "Edad: " + paciente.edad + "\n\n"
                        )

        }

    }

}













/*  INICIO  */


console.log("\tBienvenido al sistema de gestion de pacientes\n\nAqui podra gestionar la lista de pacientes, agregar, modificar y eliminarlos de la lista.\n\n");

let continuar = true;

while(continuar){

    let menu = parseInt(prompt("\n\nPara imprimir la lista de pacientes oprima 1\nPara agregar un paciente a la lista oprima 2\nPara eliminar un paciente oprima 3\nPara ver los pacientes de un sexo en particular oprima 4\nPara ordenar la lista de alguna manera en particular oprima 5\nPara ver los pacientes de cierto rango de edad precione 6\n"));
    
    switch(menu){
        case 1:

            // function mostrarPacientes(pacientes){
            //     console.log("Lista actual de pacientes:\n\n");
            //     for(const paciente of pacientes){
            //         console.log("Nombre: " + paciente.nombre + "\n" + 
            //                     "Apellido: " + paciente.apellido + "\n" +
            //                     "DNI: " + paciente.dni + "\n" +
            //                     "Sexo: " + paciente.sexo +"\n" +
            //                     "Edad: " + paciente.edad + "\n\n"
            //                     )
            //     }
            // }


            mostrarPacientes(pacientes);
            console.log("\n\n");
        break;





        case 2:

            // function agregarPaciente(){
            //     let nombre = prompt("Nombre: ");
            //     let apellido = prompt("Apellido: ");
            //     let dni = prompt("DNI: ");
            //     let sexo = prompt("Sexo M/F: ").toUpperCase();
            //     let edad = parseInt(prompt("Edad: "));
                
            //     const paciente = {
            //         nombre: nombre,
            //         apellido: apellido,
            //         dni: dni,
            //         sexo: sexo,
            //         edad: edad
            //     }
            
            //     return paciente;
            // }
            
            






            let agregar = prompt("Desea agregar un paciente? SI/NO\n").toLowerCase();
            if (agregar == "si"){
                const pacienteNuevo= agregarPaciente();
                pacientes.push( pacienteNuevo );
                console.log("Nombre: " + pacienteNuevo.nombre + "\n" + 
                            "Apellido: " + pacienteNuevo.apellido + "\n" +
                            "DNI: " + pacienteNuevo.dni + "\n" +
                            "Sexo: " + pacienteNuevo.sexo +"\n" +
                            "Edad: " + pacienteNuevo.edad + "\n\n" +
                            "Paciente agregado\n\n"
                            )

                let mostrarListaActualizada = prompt("Decea ver la lista actualizada? SI/NO").toLowerCase();
                if(mostrarListaActualizada == "si"){
                    console.log("\n\nLa lista de pacientes actualizada es =\n\n");
                    mostrarPacientes(pacientes);
                    console.log("\n\n");
                }
                

            }
            console.log("\n\n");


            
        break;



        case 3:

            

            // function pacienteAEliminar( dni, pacientes){

            //     let contador = 0;//contador para seguir el indice del array y poder eliminarlo con el splice()
            //     let flag = false;//flag para controlar la iteracion

            //     for(const paciente of pacientes){

            //         if( contador < pacientes.length){//cuando el contador sea igual a la cantidad de elementos del array es porque no se encontro el DNI

            //             if( paciente.dni == dni ){
            //                 flag = true;//si encuentra el dni buscado cambia a true
            //             }

            //             //si flag es true encontro el paciente
            //             if(flag== true){
                        

            //                 console.log("El paciente eliminado es: \n" +
            //                     "Nombre: " + paciente.nombre + "\n" +
            //                     "Apellido: " + paciente.apellido + "\n" +
            //                     "DNI: " + paciente.dni + "\n" +
            //                     "Sexo: " + paciente.sexo + "\n" +
            //                     "Edad: " + paciente.edad + "\n\n"
            //                 )


            //                 pacientes.splice(contador,1);//se elimina el paciente 
            //                 return ;

                            
                        
            //             }
            //             contador++;
            //         }

            //     }

            //     alert("\nNo se encontro el DNI buscado");
            //     return;

            // }



            let eliminar = prompt("Desea eliminar un paciente? SI/NO\n").toLowerCase();
            if (eliminar == "si"){
                let dniPacienteAEliminar= parseInt(prompt("Ingrese el DNI del paciente que decea eliminar: "));
                
                pacienteAEliminar( dniPacienteAEliminar, pacientes);


            }
        break;

        case 4:


            // function sexoParticular( sexoParametro , pacientes ){

            //     alert("en funcion");
            //     console.log("Los pacientes de sexo " + sexoParametro + " son: \n\n");
            
            //     for(const paciente of pacientes){
            
            //         if( paciente.sexo === sexoParametro){
                        
            //             console.log("Nombre: " + paciente.nombre + "\n" + 
            //                         "Apellido: " + paciente.apellido + "\n" +
            //                         "DNI: " + paciente.dni + "\n" +
            //                         "Sexo: " + paciente.sexo +"\n" +
            //                         "Edad: " + paciente.edad + "\n\n"
            //                         )
            
            //         }
            
            //     }
            
            // }


            let cualSexo = prompt("Ingrese M/F").toUpperCase();
            sexoParticular( cualSexo , pacientes );
    
        break;

        case 5:
            alert("dentro de case 5");    

            let menuCase5 = parseInt( prompt("\nSi quiere los pacientes ordenados alfaveticamente por apellido precione 1\n Si quiere los pacientes ordenados alfaveticamente por nombre precione 2\nSi quiere los pacientes ordenados primero masculinos despues femeninos precione 3\nSi quiere los pacientes ordenados primero femeninos y despues masculinos precione 4\nSi quiere los pacientes ordenados por edad acendente precione 5\nSi quiere los pacientes oredenados de manera decendente precione 6\n") );

            switch(menuCase5){
                case 1:
                    
                    pacientes.sort((a,b)=> a.apellido.localeCompare(b.apellido) );
                    alert("Se ordeno la lista alfaveticamente por apellido");
                    console.log("Se ordeno la lista alfaveticamente por apellido\n\n");
                    
                    break;

                case 2:

                    pacientes.sort((a,b)=> a.nombre.localeCompare(b.nombre) );
                    alert("Se ordeno la lista alfaveticamente por nombre");
                    console.log("Se ordeno la lista alfaveticamente por nombre\n\n");
                    
                    break;

                case 3:

                    pacientes.sort((a,b)=> b.sexo.localeCompare(a.sexo) );
                    alert("Se ordeno la lista primero masculinos y despues femeninos");
                    console.log("Se ordeno la lista primero masculinos y despues femeninos\n\n");
                    
                    break;

                case 4: 
                    
                    pacientes.sort((a,b)=> b.sexo.localeCompare(a.sexo) );
                    pacientes.reverse();
                    alert("Se ordeno la lista primero femeninos y despues masculinos");
                    console.log("Se ordeno la lista primero femeninos y despues masculinos\n\n");

                    break;

                case 5:

                    pacientes.sort((a,b)=> a.edad - b.edad );
                    alert("Se ordeno la lista de por edad de manera ascendente");
                    console.log("Se ordeno la lista de por edad de manera ascendente\n\n");

                    break;

                case 6:

                    pacientes.sort( (a,b)=> b.edad - a.edad );
                    alert("Se ordeno la lista de por edad de manera descendente");
                    console.log("Se ordeno la lista de por edad de manera descendente\n\n");

                    break;

                default:

                    alert("Opcion incorrecta de ordenamiento");
                    break;

            }

        break;
        
        case 6:
            
            let menuCase6 = parseInt(prompt("Si desea ver a los pacientes NIÑOS precione 1\nSi desea ver a los pacientes JOVENES precione 2\nSi decea ver a los pacientes ADULTOS precione 3\nSi desea ver a los pacientes LONGEVOS precione 4"));


            switch(menuCase6){
                case 1:
                    
                    console.log("Los pacientes NIÑOS son:\n\n")
                    for(const paciente of pacientes){
                        if ( paciente.edad <= 13){

                            console.log("Nombre: " + paciente.nombre + "\n" + 
                                "Apellido: " + paciente.apellido + "\n" +
                                "DNI: " + paciente.dni + "\n" +
                                "Sexo: " + paciente.sexo +"\n" +
                                "Edad: " + paciente.edad + "\n\n"
                                )
                        }
                    }

                break;

                case 2:

                    console.log("Los pacientes JOVENES son:\n\n")
                    for(const paciente of pacientes){
                        if ( paciente.edad > 13 && paciente.edad <= 40){

                            console.log("Nombre: " + paciente.nombre + "\n" + 
                                "Apellido: " + paciente.apellido + "\n" +
                                "DNI: " + paciente.dni + "\n" +
                                "Sexo: " + paciente.sexo +"\n" +
                                "Edad: " + paciente.edad + "\n\n"
                                )
                        }
                    }

                break;

                case 3:

                    console.log("Los pacientes ADULTOS son:\n\n")
                    for(const paciente of pacientes){
                        if ( paciente.edad > 40 && paciente.edad <= 100){

                            console.log("Nombre: " + paciente.nombre + "\n" + 
                                "Apellido: " + paciente.apellido + "\n" +
                                "DNI: " + paciente.dni + "\n" +
                                "Sexo: " + paciente.sexo +"\n" +
                                "Edad: " + paciente.edad + "\n\n"
                                )
                        }
                    }

                break;

                case 4:

                    console.log("Los pacientes LONGEVOS son:\n\n")
                    for(const paciente of pacientes){
                        if ( paciente.edad > 100 ){
                            
                            console.log("Nombre: " + paciente.nombre + "\n" + 
                                "Apellido: " + paciente.apellido + "\n" +
                                "DNI: " + paciente.dni + "\n" +
                                "Sexo: " + paciente.sexo +"\n" +
                                "Edad: " + paciente.edad + "\n\n"
                                )
                        }
                    }


                break;
                
                default:
                    alert("Opcion incorrecta");
                break;

            }




            
            
        break;


        default:
            console.log("Opcion incorrecta\n");
            break;
    }








    let confirmacion = prompt("Decea continuar operando? SI/NO").toLowerCase();
    if (confirmacion == "no"){
        continuar = false;
    }

}

console.log("Buelva pronto...");