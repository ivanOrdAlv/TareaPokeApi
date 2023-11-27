document.addEventListener("DOMContentLoaded", function () {
    obtenerPokemonAleatorio();

    document.getElementById("btn-obtener").addEventListener("click", obtenerPokemonAleatorio);
});

async function obtenerPokemonAleatorio() {
    try {
 
        const numeroPokemon = Math.floor(Math.random() * 1008) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`);
        const data = await response.json();

        mostrarPokemon(data);
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
    }
}

function mostrarPokemon(pokemon) {
    const imagenPokemon = document.getElementById("pokemon-image");
    const nombrePokemon = document.getElementById("pokemon-name");
    const idPokemon = document.getElementById("pokemon-id");
    const tipoPokemon = document.getElementById("pokemon-type");
    const habilidadesPokemon = document.getElementById("pokemon-abilities");
    imagenPokemon.src = pokemon.sprites.front_default;
    nombrePokemon.textContent = `Nombre: ${pokemon.name}`;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    
    tipoPokemon.textContent = `Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}`;

    habilidadesPokemon.textContent = `Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(", ")}`;
}
