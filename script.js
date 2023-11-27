document.addEventListener("DOMContentLoaded", function () {
    obtenerPokemonAleatorio();

    // Agrega un event listener al botón para obtener otro Pokémon
    document.getElementById("btn-obtener").addEventListener("click", obtenerPokemonAleatorio);
});

async function obtenerPokemonAleatorio() {
    try {
        // Obtén un número aleatorio entre 1 y 898 (número total de Pokémon en la PokeAPI)
        const numeroPokemon = Math.floor(Math.random() * 898) + 1;

        // Consulta la información del Pokémon utilizando la PokeAPI
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`);
        const data = await response.json();

        // Actualiza la interfaz con la información del Pokémon
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
    
    // Muestra los tipos de Pokémon
    tipoPokemon.textContent = `Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}`;

    // Muestra las habilidades del Pokémon
    habilidadesPokemon.textContent = `Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(", ")}`;
}
