// const findOddAppearance = numbersList => {
//     const repeatsMap = numbersList.reduce((acc, number) => {
//         acc[number] = (acc[number] || 0) + 1
//         return acc
//     }, {})
//     console.log(repeatsMap);
//     return +Object.keys(repeatsMap).find((number)=> repeatsMap[number] % 2 !== 0)
// }

const findOddAppearance = numbersList => {
  return  numbersList.find((numberToFind) => numbersList.filter(numberToFilter => numberToFilter === numberToFind).length % 2)}
