var current = document.querySelector("#currentDay");
var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var getTemp = document.getElementById('temp');

// get today's date for header
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);


fetch("https://api.openweathermap.org/data/2.5/onecall?lat=37.4516&lon=-77.6592&units=imperial&exclude=hourly,daily,minutely&appid=51a61d96cb3c110846e5130afe5ac605")
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            appendData(data);
        // Use the console to examine the response
        console.log(data);
        })

        function appendData(data) {
                            
            var el = document.createElement("div");
            el.innerHTML = data.current.temp;
            getTemp.appendChild(el); 
    
        };



// ---- absent form start ----

// // whole modal
// var modal = document.getElementById("absentee");
// // x to close
// var closeModal = document.querySelector(".close-modal");
// // absent button in nav
// var abBtn = document.getElementById("abBtn");
// // submit button
// var submitBtn = document.getElementById("submitBtn");
// // click absent button to display modal form
// abBtn.addEventListener('click', function() {
//     modal.style.display = "block";
// })
// // click x to exit
// closeModal.addEventListener('click', function() {
//     modal.style.display = "none";
// })
// var form = document.getElementById("save");
// var student = document.getElementById("student");
// var parent = document.getElementById("parent");
// var info = document.getElementById("info");

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
//event listener for lunch api
$("#fetch-button").on('click', getApi);


