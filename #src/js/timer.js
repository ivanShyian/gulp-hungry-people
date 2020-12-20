function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let minutesSpan = clock.querySelector('.promo-countdown__minutes');
    let secondsSpan = clock.querySelector('.promo-countdown__seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes + ':').slice(-3);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 14 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);