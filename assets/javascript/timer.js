
// var averageTime = 0;
// var numberOfVisitors = 0;
//function timer, monitoring how long the user was on the website, along 
function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
};
//stop function for when user exits website
function stop() {
    var intervalId = setInterval(count, 1000);
    clearInterval(intervalId);
    clockRunning = false;
};

//function to 
window.addEventListener('beforeunload', function (e) {
    function stop() {
        var intervalId = setInterval(count, 1000);
        clearInterval(intervalId);
        clockRunning = false;
    };
    stop();
    e.returnValue = '';
});

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

