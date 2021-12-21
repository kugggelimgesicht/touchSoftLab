const sayWelcomeButton = document.getElementById('sayWelcome')
let isIntervalRunning = null

function sayWelcome() {
    clearInterval(isIntervalRunning);
    if (isIntervalRunning !== null) {
        isIntervalRunning = null;
    } else {
        isIntervalRunning = setInterval(function () {
            console.log('you are welcome!');
        }, 3000);
    }


}

sayWelcomeButton.addEventListener('click', sayWelcome)