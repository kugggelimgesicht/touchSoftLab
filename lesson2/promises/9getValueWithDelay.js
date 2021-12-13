async function getValueWithDelay(value, delay) {
    const sleep = time => new Promise(response => setTimeout(response, time))
    await sleep(delay)
    return value
}