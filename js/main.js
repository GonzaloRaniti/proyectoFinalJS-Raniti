// let nombre = prompt("Elegir pelicula")
// let genero = prompt("Accion o Romance")
// let year = prompt("Elegir año")
// let pais = prompt("Elegir país")


// const  infoBusqueda = {
//     nombre: nombre,
//     genero: genero,
//     year: year,
//     pais: pais,

// }

// function mostrarPeliculas(peliculas){
//     peliculas.forEach( pelicula => {
//         console.log(pelicula.nombre + " " + pelicula.genero + " " + pelicula.duracion  + " " + pelicula.year +  " " + pelicula.estreno  +  " "  + pelicula.pais + " " + pelicula.presupuesto + " " + pelicula.recaudacion + " ")

//     })
// }




// function filtrarNombre(pelicula){
//     if(infoBusqueda.nombre){
//         return pelicula.nombre == infoBusqueda.nombre
//     }
//     return pelicula;
// }

// function filtrarGenero(pelicula){
//     if(infoBusqueda.genero){
//         return pelicula.genero == infoBusqueda.genero
//     }
//     return pelicula;
// }

// function filtrarDuracion(pelicula){
//     if(infoBusqueda.duracion){
//         return pelicula.duracion == infoBusqueda.duracion
//     }
//     return pelicula;
// }


// function filtrarEuracion(pelicula){
//     if(infoBusqueda.estreno){
//         return pelicula.estreno == infoBusqueda.estreno
//     }
//     return pelicula;
// }


// function filtrarYear(pelicula){
//     if(infoBusqueda.year){
//         return pelicula.year == infoBusqueda.year
//     }
//     return pelicula;
// }


// function filtrarPais(pelicula){
//     if(infoBusqueda.pais){
//         return pelicula.pais == infoBusqueda.pais
//     }
//     return pelicula;
// }





// function filtrarPelicula(){
//     let resultado = peliculas.filter(filtrarNombre).filter(filtrarGenero).filter(filtrarYear).filter(filtrarPais)
//     console.log(resultado.length)
//     if(resultado.length){
//         mostrarPeliculas(resultado)
//     }else {
//         noHayresultado(resultado)
//     }
// }

// function noHayresultado(){
//     console.log("No hay resultados")
// }

// filtrarPelicula()



let loadMoreBoton1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBoton1.onclick  = () => {
    let boxes = [...document.querySelectorAll (
        '.box-container-1 .box-1'
    )];
    for( let i = currentItem1; i < currentItem1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 +=4;
    if(currentItem1 >= boxes.length) {
        loadMoreBoton1.style.display = 'none';
    }

}

let loadMoreBoton2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBoton2.onclick  = () => {
    let boxes = [...document.querySelectorAll (
        '.box-container-2 .box-2'
    )];
    for( let i = currentItem2; i < currentItem2 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 +=4;
    if(currentItem2 >= boxes.length) {
        loadMoreBoton2.style.display = 'none';
    }

}


let loadMoreBoton3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBoton3.onclick  = () => {
    let boxes = [...document.querySelectorAll (
        '.box-container-3 .box-3'
    )];
    for( let i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 +=4;
    if(currentItem3 >= boxes.length) {
        loadMoreBoton3.style.display = 'none';
    }

}