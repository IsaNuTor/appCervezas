const API_URL = "https://api.punkapi.com/v2/";

const HTMLResponseCervezaAleatoria = document.querySelector("#cervezaNombre");
const HTMLnombreCerveza = document.querySelector("#cervezaNombreBack");
const img = document.querySelector("#imagenCerveza");
const descripcion = document.querySelector("#cervezaDescripcion");
const gradosCerveza =  document.querySelector("#gradosCerveza");
const slogan =  document.querySelector("#slogan");
const card =  document.getElementById('cardMain');

// Al pulsar el botón nos muestre una cerveza aleatoria
function mostrarCervezaAleatoria() { 

    card.style.display ='block';
    // La respuesta llega en formato string por lo que hay que parsearlo, para ello fetch nos proporciona el método json
    fetch(`${API_URL}beers/random`)
        .then((response) => response.json())
        .then((cerveza) => {

            let nombreCerveza = cerveza[0].name;

            // Nombre de la cerveza
            HTMLResponseCervezaAleatoria.innerHTML = `${nombreCerveza}`;
            HTMLnombreCerveza.innerHTML = `${nombreCerveza}`;

            // Imagen cerveza
            let imgCerveza = cerveza[0].image_url;
            imgCerveza != null ? img.src = `${imgCerveza}` : img.src ='img/cervezadefecto.png';

            // Descripción
            let descCerveza = cerveza[0].description;
            descripcion.innerHTML = `${descCerveza}`;

            // Grados cerveza
            let grados = cerveza[0].abv;
            gradosCerveza.innerHTML = `${grados}%`

            // Lema
            let tagline = cerveza[0].tagline;
            slogan.innerHTML = `&quot;${tagline}&quot;`
        });
}
