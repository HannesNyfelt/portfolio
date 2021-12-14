function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();

    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }

    var dateTime = year + '-' + month + '-' + day
    return dateTime;
}

function getDateHour() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }

    var dateHour = hour + ':' + minute + ':' + second;
    return dateHour
}


setInterval(function () {
    currentDate = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentDate;
}, 1000);

setInterval(function () {
    currentTime = getDateHour();
    document.getElementById("digital-time").innerHTML = currentTime
}, 1000);


