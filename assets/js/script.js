var current = document.querySelector("#currentDay");
var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
// current date
var date = new Date();
var day = date.getDate();
var month = date.getMonth()  + 1;
var year = date.getFullYear();

// get today's date for header
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);


var getWeather =function(text) {

var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=37.45&lon=77.65&exclude=hourly&appid=51a61d96cb3c110846e5130afe5ac605";

    fetch(apiUrl).then(function(response) {
        
        console.log(response);
        response.json().then(function(data) {
        console.log(data);
        });
    });
};



// ---- absent form start ----

// whole modal
var modal = document.getElementById("absentee");
// x to close
var closeModal = document.querySelector(".close-modal");
// absent button in nav
var abBtn = document.getElementById("abBtn");
// submit button
var submitBtn = document.getElementById("submitBtn");
// click absent button to display modal form
abBtn.addEventListener('click', function() {
    modal.style.display = "block";
})
// click x to exit
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
})
var form = document.getElementById("save");
var student = document.getElementById("student");
var parent = document.getElementById("parent");
var info = document.getElementById("info");

submitBtn.addEventListener('click', function() {
    // exit modal when click submit
    modal.style.display = "none";
    var absence = {
        student: student.value,
        parent: parent.value,
        info: info.value 
    }
    console.log(absence);
    // store user inputs
    localStorage.setItem("absences", JSON.stringify(absence));
 
    console.log(absence);
    // reset text fields to empty
    form.reset();
});
var storedInput = document.getElementById("storedInput"); 
var abLink = document.getElementById("abLink");

abLink.addEventListener('click', function() {
    console.log("clicked");
var storedInput = JSON.parse(localStorage.getItem("absences"))
console.log(storedInput);
var abRecord = getElementById("abRecord");
document.getElementById("date").textContent = currentDate;

})


// ---- absent form end ----

// ---- api for meals start ----
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
// fetchButton.addEventListener('click', getApi);
// // ---- api for meals end ----
// var volunteer = document.getElementById("volunteer");
// var hereLink = document.getElementById("here");
// hereLink.addEventListener('click', function() {
//     volunteer.style.display = "block";
// })
