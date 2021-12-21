const textInput = document.getElementById('textInput')
const showSecondsButton = document.getElementById('showSeconds')

function debounce(callback, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}

function getTextFieldValue(e) {
    console.log(e.target.value);
}
textInput.addEventListener('keyup', debounce(getTextFieldValue, 1000))