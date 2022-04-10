var current = document.querySelector("#currentDay");
var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

// get today's date for header
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// function getWeather() {
//     var requestTemp = 'https://https://fcc-weather-api.glitch.me/api/current?lat=37.44&lon=77.65';
//     fetch(requestTemp)
//         .then(function (response) {
//         return response.json();
//         })
//         .then(function (data) {
//             // Use the console to examine the response
//             console.log(data);
//             for(i = 0; i < data.length; i++) {
//                 var temp = document.createElement("div");
//                 temp.innerHTML = data.main[0].temp;
//                 userContainer.appendChild(temp);  
//         };
//         console.log(data.main[0].temp);
//     });
// }
// getWeather;


function getApi() {
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        
            var name = document.createElement("div");
            name.innerHTML = data.meals[0].strMeal;
            userContainer.appendChild(name); 
      
        console.log(data.meals[0].strMeal);
        //allows button to be clicked only once
        $("#fetch-button").off('click');
       
    });
}
$("#fetch-button").on('click', getApi);

