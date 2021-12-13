const findMostFrequentNumber = (numbersList) => {
    const repeats = numbersList.reduce((acc, number) => {
        acc[number] = (acc[number] || 0) + 1
        return acc
    }, {})
    return +Object.keys(repeats).reduce((result, key) => repeats[result] > repeats[key] ? result : key)

}