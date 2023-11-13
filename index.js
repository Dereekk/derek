
var url = "https://api.openweathermap.org/data/2.5/weather?id=5946768&APPID=bd0b7c042d9a582253db55905fc1a01d";

weather();
function weather(){
    $.ajax({
        url: url,
        success: function (result) {
            "use strict";
            if("main" in result){
                $(".temp").text(result.main.temp + "K")
            }
            if("name" in result){
                $(".name").text(result.name)
            }

        }
    });
    setTimeout(weather, 60000);
}

document.getElementById("button").addEventListener("click", myFunction);
i = 0 
function myFunction() {
    document.getElementById("eh").innerHTML = i++;
    

}
var end = new Date('2023-11-30T22:00:00-07:00');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour *24;
var timer;

function showRemaining()
{
    var now = new Date();
    var distance = end - now;
    if (distance < 0 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( (distance % _day ) / _hour );
    var thours =  Math.floor((distance) / _hour);
    var minutes = Math.floor( (distance % _hour) / _minute );
    var tminutes = Math.floor( (distance) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var tseconds = Math.floor( (distance) / _second );
    var milliseconds = distance % _second;
    var tmilliseconds = distance;
    
    var countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = days  + 'd ' + 
                                 hours + 'h ' +
                                 minutes + 'm ' +
                                 seconds + 's ' +
                                 milliseconds + 'ms';
    var countdownElement = document.getElementById('days');
    countdownElement.innerHTML = days  + 'd ';
    var countdownElement = document.getElementById('hours');
    countdownElement.innerHTML = thours  + ' hours ';
    var countdownElement = document.getElementById('minutes');
    countdownElement.innerHTML = tminutes  + ' minutes ';
    var countdownElement = document.getElementById('seconds');
    countdownElement.innerHTML = tseconds  + ' seconds ';
    var countdownElement = document.getElementById('mili');
    countdownElement.innerHTML = tmilliseconds  + ' ms ';
                                 
}

timer = setInterval(showRemaining, 10);



