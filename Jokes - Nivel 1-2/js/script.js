jokes(); //Primera vez que se carga aplicación muestra primer chiste

document.querySelector("#boton").addEventListener("click", jokes);

function jokes() {

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

    xhttp.send();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let joke = document.querySelector("#joke");

            joke.innerHTML = datos.value.joke;
        }

    }
}