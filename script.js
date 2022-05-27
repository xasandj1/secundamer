const hours = document.querySelector('.hour'),
    minute = document.querySelector('.minutes'),
    secunds = document.querySelector('.secunds'),
    stopwatch__btn = document.querySelector('.btns'),
    stopWtachSpan = document.querySelector('.tabsLink__span'),
    stopWatchAdio = document.querySelector('#stopWatchAdio')


stopwatch__btn.addEventListener('click', function () {
    if (this.innerHTML == 'START') {
        stopwatch__btn.innerHTML = 'STOP'
        stopWtachSpan.classList.add('active')
        interval = setInterval(() => {
            stopWatch()
            stopWatchAdio.play()
        }, 1000)

    } else if (this.innerHTML == 'STOP') {
        stopwatch__btn.innerHTML = 'CLEAR'
        stopWtachSpan.classList.remove('active')
        stopWtachSpan.classList.add('active_clear')
        clearInterval(interval)

    } else if (this.innerHTML == 'CLEAR') {
        stopwatch__btn.innerHTML = 'START'
        stopWtachSpan.classList.remove('active_clear')
        hours.innerHTML = 0
        minute.innerHTML = 0
        secunds.innerHTML = 0
        hisob = 0
    }
})
let hisob = 0
function stopWatch() {
    hisob++
    if (hisob <= 59) {
        secunds.innerHTML = hisob
    } else if (hisob > 59) {
        hisob = 0
        secunds.innerHTML = hisob
        minute.innerHTML++
    }
    if (minute.innerHTML > 59) {
        minute.innerHTML = 0
        hours.innerHTML++
    }
}

// calculator


// const calcScreen = document.querySelector('.colect__screen-out'),
//     calcBtns = Array.from(document.querySelectorAll('.colc__btn'))

// for (let i = 0; i < calcBtns.length; i++) {
//     const element = calcBtns[i];
//     console.log(element);
// }









