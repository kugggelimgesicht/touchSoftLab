 const sayHello = document.getElementById('sayHello')

 function debounce(callback, delay) {
     let timeout;
     return function (...args) {
         clearTimeout(timeout)
         timeout = setTimeout(() => {
             callback.apply(this, args)
         }, delay)
     }
 }

 sayHello.addEventListener('click', debounce(() => console.log('Hello world!'), 5000))