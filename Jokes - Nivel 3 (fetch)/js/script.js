jokes(); //Primera vez que se carga aplicación muestra primer chiste

document.querySelector("#boton").addEventListener("click", jokes);

let joke = document.querySelector("#joke");

function jokes() {
    fetch("http://api.icndb.com/jokes/random")
    .then(res => res.json())
    .then(data => {
        joke.innerHTML = data.value.joke;
    })
    
}