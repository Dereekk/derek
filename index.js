
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




