const timerDays = document.getElementById('days'),
    timerHours = document.getElementById('hours'),
    timerMinutes = document.getElementById('minutes'),
    timerSeconds = document.getElementById('seconds');

// set the date to count down to
const timerEnd = new Date('2020-12-31T00:00:00').getTime();

// get current time from Date.now() and add it to the timer
function updateTimers() {
    const timeLeft = new Date(timerEnd - Date.now());

    timerDays.textContent = timeLeft.getUTCDate() - 1;
    timerHours.textContent = timeLeft.getUTCHours();
    timerMinutes.textContent = timeLeft.getUTCMinutes();
    timerSeconds.textContent = timeLeft.getUTCSeconds();

    // call the function again every second
    setTimeout(updateTimers, 1000);
}

updateTimers();