function Clock() {
    let today = new Date();
    let date =
        today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" +
        today.getSeconds();
    let dateTime = date + ' ' + time;
    document.getElementById("current-time").innerHTML = dateTime;
}
setInterval(Clock, 1000);
