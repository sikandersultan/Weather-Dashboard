var apiKey = "7526abf0fdb81c40132651ed95247307"
var searchButton = $(".searchButton")

searchButton.click(function(){
    var input = $(".searchInput").val()
    var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&Appid=" + apiKey + "&units=imperial"
    var fiveDays = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&Appid=" + apiKey + "&units=imperial"
    console.log(input)

    if (input == "") {
        alert("Please input a city name below")
    } else {

        
    }
})