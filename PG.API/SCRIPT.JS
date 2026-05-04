const cards = document.getElementById("cards");

fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => {

    data.results.forEach(personaje => {

        cards.innerHTML += `
        <div class="card">
            <img src="${personaje.image}" alt="${personaje.name}">
            
            <div class="info">
                <h2>${personaje.name}</h2>
                <p>Estado: ${personaje.status}</p>
                <p>Especie: ${personaje.species}</p>
                <p>Género: ${personaje.gender }</p>
                <p>Edad: ${personaje.age}</p>
            </div>
        </div>
        `;

    });

})
.catch(error => console.log("Error:", error));