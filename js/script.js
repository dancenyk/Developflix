import peliculas from './peliculas.js'

console.log(peliculas)

// filtrar por genero genre_ids
// filtrar por foto   poster_path
// filtrar por titulo "title"

//guardo parte de la url para las imágenes
const urlBase = "https://image.tmdb.org/t/p/w500"; 

//capturo los contenedores por cada género 
const contenAccion = document.getElementById("genero-28");
const contenThriller = document.getElementById("genero-53");
const contenAventura = document.getElementById("genero-12");


//Recorro cada una de las pelis y filtro por genero y a través del metodo include pongo la condición
//Almaceno esos arrays en variables. El resultado que tengo es un array de objetos, que dentro tiene propiedades y necesito acceder a ellas.

const pelisAccion =  peliculas.filter((peli)=> peli.genre_ids.includes(28));
const pelisThriller = peliculas.filter((peli)=> peli.genre_ids.includes(53));
const pelisAventura = peliculas.filter((peli)=> peli.genre_ids.includes(12));

console.log(pelisAventura)

//Necesito acceder a las propiedades de cada objeto que contiene tiene ese array (acceder al poster y titulo) Voy a preguntarle a Data como se haria con un for of 

for (let i =0; i<pelisAccion.length; i++){

    const tarjeta = document.createElement ("div")

    const poster = document.createElement ("img");
    poster.src = urlBase + pelisAccion[i].poster_path
    tarjeta.appendChild(poster)

    const titulo = document.createElement("h3");
    titulo.innerText = pelisAccion[i].title
    tarjeta.appendChild(titulo)

    contenAccion.appendChild(tarjeta)
}

for (let i =0; i<pelisThriller.length; i++){

    const tarjeta = document.createElement ("div")

    const poster = document.createElement ("img");
    poster.src = urlBase + pelisThriller[i].poster_path
    tarjeta.appendChild(poster)

    const titulo = document.createElement("h3");
    titulo.innerText = pelisThriller[i].title
    tarjeta.appendChild(titulo)

    contenThriller.appendChild(tarjeta)
}

for (let i = 0; i<pelisAventura.length; i++){

    const tarjeta = document.createElement ("div")

    const poster = document.createElement ("img");
    poster.src = urlBase + pelisAventura[i].poster_path
    tarjeta.appendChild(poster)

    const titulo = document.createElement("h3");
    titulo.innerText = pelisAventura[i].title
    tarjeta.appendChild(titulo)

    contenAventura.appendChild(tarjeta)
}






/*
1- coger contenedor
2- crear elemento 
3- ponerle contenido a ese elemento
4- appenchild 
*/










/* Otra forma en que lo hice con for of y forEach

for(const peli of peliculas){
    peli.genre_ids.forEach(function(id){
        if(id ===12){     
         pelisAventura.push(peli);
         return pelisAventura;
        }
    })
}; 
console.log(pelisAventura)

const contenAventura = document.getElementById("genero-12");

*/






   





