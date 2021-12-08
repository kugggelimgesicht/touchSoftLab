const findMostFrequent = (array) => {
    const repeats = array.reduce((acc, number) => {
        acc[number] = (acc[number] || 0) + 1
        return acc
    }, {})
    return Object.keys(repeats).reduce((prev, curr) => repeats[prev] > repeats[curr] ? prev : curr)

}