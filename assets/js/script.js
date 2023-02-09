const date = new Date();
var timeVersion = "";
if(date.getHours() < 12){
    timeVersion = " am";
}
else{
    timeVersion = " pm";
}

var timerId = setInterval(updateTime, 1000);
function updateTime(){ 
    if(date.getHours() < 10){
        document.getElementById('date-time').innerHTML = 
            date.getHours() + " : " + "0" + date.getMinutes() + timeVersion;
    }
    else{
        document.getElementById('date-time').innerHTML = 
            date.getHours() + " : " + date.getMinutes() + timeVersion;
    }
   
}