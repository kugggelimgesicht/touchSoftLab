import fetch from 'node-fetch';
const allPokemonsURL = 'https://pokeapi.co/api/v2/pokemon'
async function getPokemons() {
    try {
        const response = await fetch(allPokemonsURL)
        const result = await response.json()
        console.log(result)
    } catch (e) {
        console.log.error
    }
}