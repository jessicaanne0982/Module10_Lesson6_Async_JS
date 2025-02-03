// Task 1 - Countdown Timer
let time;
let countdownInterval;

const countdownElement = document.getElementById('countdownTimer');

function startCountdown() {
    const userInput = document.getElementById('timeInput').value;
    if (userInput > 0) {
        time = userInput;;
        startTimer();
    } else {
        alert("Please enter a number greater than 0")
    }
}

function startTimer() {
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    let seconds = time % 60;
    countdownElement.innerHTML = `${seconds} seconds`;
    time--;

    if (time < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Time's up!";
    }
}

// Task 2 - Delayed Notification - this alert will display after the repeat notifications are finished
function delayedNotification() {
    setTimeout(() => {
        alert("Thank you for using the Countdown Timer!");
      }, 4000);
}



// Task 3 - Repeat Notifications
function repeatNotifications() {
    let intervalId = setInterval(() => {
        alert("One Second has Passed");
    }, 1000);

    // Stop the interval after 4 seconds
    setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped!");
    }, 4000); 
}

repeatNotifications();
delayedNotification();
