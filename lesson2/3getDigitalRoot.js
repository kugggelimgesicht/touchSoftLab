const getDigitalRoot = number => {
    const digitsSum = number.toString().split('').reduce((prevNumber, currNumber) => +prevNumber + (+currNumber))
    return digitsSum < 10 ? digitsSum : getDigitalRoot(digitsSum)
}