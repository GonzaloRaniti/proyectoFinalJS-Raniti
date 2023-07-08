let nombre = prompt("Elegir pelicula")
let genero = prompt("Accion o Romance")
let year = prompt("Elegir año")
let pais = prompt("Elegir país")


const  infoBusqueda = {
    nombre: nombre,
    genero: genero,
    year: year,
    pais: pais,

}

function mostrarPeliculas(peliculas){
    peliculas.forEach( pelicula => {
        console.log(pelicula.nombre + " " + pelicula.genero + " " + pelicula.duracion  + " " + pelicula.year +  " " + pelicula.estreno  +  " "  + pelicula.pais + " " + pelicula.presupuesto + " " + pelicula.recaudacion + " ")

    })
}




function filtrarNombre(pelicula){
    if(infoBusqueda.nombre){
        return pelicula.nombre == infoBusqueda.nombre
    }
    return pelicula;
}

function filtrarGenero(pelicula){
    if(infoBusqueda.genero){
        return pelicula.genero == infoBusqueda.genero
    }
    return pelicula;
}

function filtrarDuracion(pelicula){
    if(infoBusqueda.duracion){
        return pelicula.duracion == infoBusqueda.duracion
    }
    return pelicula;
}


function filtrarEuracion(pelicula){
    if(infoBusqueda.estreno){
        return pelicula.estreno == infoBusqueda.estreno
    }
    return pelicula;
}


function filtrarYear(pelicula){
    if(infoBusqueda.year){
        return pelicula.year == infoBusqueda.year
    }
    return pelicula;
}


function filtrarPais(pelicula){
    if(infoBusqueda.pais){
        return pelicula.pais == infoBusqueda.pais
    }
    return pelicula;
}





function filtrarPelicula(){
    let resultado = peliculas.filter(filtrarNombre).filter(filtrarGenero).filter(filtrarYear).filter(filtrarPais)
    console.log(resultado.length)
    if(resultado.length){
        mostrarPeliculas(resultado)
    }else {
        noHayresultado(resultado)
    }
}

function noHayresultado(){
    console.log("No hay resultados")
}

filtrarPelicula()