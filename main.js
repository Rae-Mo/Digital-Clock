function displayTime(){
    let date = new Date,
        hour = date.getHours(),//0 to 23
        minute = date.getMinutes(),//0 to 59
        second = date.getSeconds(),//0 to 59
        session = "AM",
        day = date.getDay();

    if ( hour == 0){
        h = 12;
    }

    if ( hour > 12){
        hour = hour - 12;
        session = "12";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + month + ":" + second + ":" + session; 
    document.getElementById("clockFace").innerText = time;
    document.getElementById("clockFace").textContent = time;

    setTimeout(displayTime, 1000);
}
displayTime();