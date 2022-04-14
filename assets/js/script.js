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
// click absent button in nav bar to display modal form
abBtn.addEventListener('click', function() {
    modal.style.display = "block";
})
// click x to exit
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
})
var form = document.getElementById("form");
var student = document.getElementById("student");
var parent = document.getElementById("parent");
var info = document.getElementById("info");


//  click submit button on modal
submitBtn.addEventListener('click', function() {
    // exit modal when click submit
    modal.style.display = "none";
    var absences = {
        student: student.value,
        parent: parent.value,
        info: info.value 
    }
    // store user inputs and make objects strings
    localStorage.setItem("absences", JSON.stringify(absences));
 
    console.log(absences);
    // reset text fields to empty
    form.reset();

    // console.log(JSON.parse(localStorage.getItem(absences.info).value));
});

// "absence record" link
var abLink = document.getElementById("abLink");

// click absence record to get stored user inputs and make strings back into objects
abLink.addEventListener('click', function() {
    console.log("clicked");
var storedInput = document.getElementById("storedInput"); 
var stored = JSON.parse(localStorage.getItem("absences"))

// append storage to div so it will appear on screen
storedInput.append(stored);

console.log(stored);

// show stored input
storedInput.classList.remove('hide');
storedInput.classList.add('show');

// hide original form
form.classList.remove('show');
form.classList.add('hide');

// hide absence link
abLink.classList.remove('show');
abLink.classList.add('hide');

// add current date to Date Missed:
document.getElementById("date").textContent = currentDate;


// for (var i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem(localStorage.key(i)));
//   }
//   info.textContent(localStorage.getItem(localStorage.info.value));
// info.innerHTML(info.value);
// document.getElementById("inf").innerHTML = stored.info.value;
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

$("#fetch-button").on('click', getApi);
// fetchButton.addEventListener('click', getApi);
// // ---- api for meals end ----
// var volunteer = document.getElementById("volunteer");
// var hereLink = document.getElementById("here");
// hereLink.addEventListener('click', function() {
//     volunteer.style.display = "block";
// })
