var apiKey = "7526abf0fdb81c40132651ed95247307"
var searchButton = $(".searchButton")

searchButton.click(function(){
    var input = $(".searchInput").val()
    var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&Appid=" + apiKey + "&units=imperial"
    var fiveDays = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&Appid=" + apiKey + "&units=imperial"
    console.log(input)
    console.log(fiveDays)

    if (input == "") {
        alert("Please input a city name below")
    } else {
        $.ajax({
            url: weather,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var inputCityName = $(".list-group").addClass("list-group-item")
            inputCityName.append("<li>" + response.inputCityName + "</li>")
            var mainData = $(".currentCard").append("<div>").addClass("card-body")
            mainData.empty()
            var data = mainData.append("<p>")

            mainData.append(data)
            var timeUTC = new Date(response.dt * 1000)
            data.append(response.name + " " + timeUTC.toLocaleDateString())
            data.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`)
            var currentTemp = data.append("<p>")
            data.append(currentTemp)
            currentTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>")
            currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>")
            currentTemp.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>")

            $.ajax({
                url: fiveDays,
                method: "GET"
            }).then(function (response) {
                console.log(response)
                var threeHourProblem = [0, 8, 16, 24, 32]
                var fiveDayHTML = $(".fiveDay").addClass("card-text")
                threeHourProblem.forEach(function (i) {
                    var fiveDayDate = new Date(response.list[i].dt * 1000)
                    fiveDayDate = fiveDayDate.toLocaleDateString()
                    fiveDayHTML.append("<div class=fiveDayColor>" + "<p>" + fiveDayDate + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>")
                    fiveDayHTML.append("<p>" + "Temperature: " + response.list[i].main.temp + "</p>")
                    fiveDayHTML.append("<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>")

                })
            })


    })
}})