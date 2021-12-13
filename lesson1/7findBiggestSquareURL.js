const boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, 
    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, 
    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  }, 
    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
  ];

// boxarts.map(box => {
//     box.square = box.width * box.height
// })

// const biggestSquare = boxarts.reduce((acc, box) => {
//     acc.square < box.square ? acc = box : acc
//     return acc
// }, boxarts[0]).url

// console.log(biggestSquare)
const getSquare = ({height, width}) => height * width
const findMaxSquareUrl = (imageList) => {
  return imageList.reduce((prevImg, currImg) => {
    const prevSquare = getSquare(prevImg)
    const currSquare = getSquare(currImg)
    return prevSquare > currSquare ? prevImg : currImg
  }).url
}