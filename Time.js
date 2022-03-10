window.addEventListener("load", checkTime);
function checkTime() {
    

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var ms = date.getMilliseconds();
var mm = date.getMonth();
var d = date.getDay();
var y = date.getFullYear();
var dd = date.getDate();

var statusMonth;
if (mm==0) {statusMonth = "January"}
if (mm==1) {statusMonth = "Feburary"}
if (mm==2) {statusMonth = "March"}
if (mm==3) {statusMonth = "April"}
if (mm==4) {statusMonth = "May"}
if (mm==5) {statusMonth = "June"}
if (mm==6) {statusMonth = "July"}
if (mm==7) {statusMonth = "August"}
if (mm==8) {statusMonth = "September"}
if (mm==9) {statusMonth = "October"}
if (mm==10) {statusMonth = "November"}
if (mm==11) {statusMonth = "December"}


if (d==0) {statusWeekDay = "Sunday"}
if (d==1) {statusWeekDay = "Monday"}
if (d==2) {statusWeekDay = "Tuesday"}
if (d==3) {statusWeekDay = "Wednesday"}
if (d==4) {statusWeekDay = "Thursday"}
if (d==5) {statusWeekDay = "Friday"}
if (d==6) {statusWeekDay = "Saturday"}


if (dd==1||dd==11||dd==21||dd==31) {dayEnding = "st"}
if (dd==2||dd==12||dd==22) {dayEnding = "nd"}
if (dd==3||dd==13||dd==23) {dayEnding = "rd"}
else {dayEnding = "th"}


if (h>12) {h -= 12;statusM = "P.M"} else {statusM = "A.M"}

if (h<10) {hours = "0" + h} else {hours = h}
if (m<10) {minutes = "0" + m} else {minutes = m}
if (s<10) {seconds = "0" + s} else {seconds = s}


document.querySelector(".statusDate").innerHTML = statusWeekDay + " " + statusMonth + " " + dd + dayEnding + " " + y;

document.querySelector(".statusTime").innerHTML = hours + ":" + minutes + ":" + seconds + " " + statusM;


setTimeout(checkTime, 1000);

}