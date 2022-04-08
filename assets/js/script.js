var current = document.querySelector("#currentDay");
var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

let date = new Date()
let day = date.getDate();
let month = date.getMonth()  + 1;
let year = date.getFullYear();

let fullDate = `${month}.${day}.${year}`;
console.log("Full date: " + fullDate);

current.innerHTML = "Date: " + fullDate;


function getApi() {
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        for(i = 0; i < data.length; i++) {
            var name = document.createElement("div");
            name.innerHTML = data[i].strMeal;
            userContainer.appendChild(name); 
            
        };
        console.log(name);
    });
}
fetchButton.addEventListener('click', getApi);