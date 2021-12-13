const getUniqueNumbersSet = numbersList => [...new Set(numbersList)] //1st variant

const getUniqueNumbersList = numbersList => numbersList.filter((number, index, numbers) => numbers.indexOf(number) === index) //2nd variant

