import fetch from 'node-fetch';
async function getPokemonDescription(pokemonName) {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    try {
        const response = await fetch(pokemonURL)
        const result = await response.json()
        console.log(result)
    } catch (e) {
        console.log(`Покемон по имени ${pokemonName} не найден`)
    }
}