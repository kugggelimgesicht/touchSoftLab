import fetch from 'node-fetch';
const allPokemonsURL = 'https://pokeapi.co/api/v2/pokemon'
async function getAllPokemonsDescriptions() {
    try {
        const response = await fetch(allPokemonsURL)
        const result = await response.json()
        const descriptions = await Promise.all(result.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const result = await response.json()
            return result
        }, []))
        console.log(descriptions)
    } catch (e) {
        console.log.error;
    }
}