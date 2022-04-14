var current = document.querySelector("#currentDay");
var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var getTemp = document.getElementById('temp');

//----------- get today's date for header------------
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);
// ----------------end of todays date -----------------


// ------------ weather api --------------
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




// ----------- absent form start ------------

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

});
// ----------- end absence form ------------------

// --------- absence record ----------------------

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

// add student input to student:
document.getElementById("stu").textContent = stored.student;

// add parent input to parent:
document.getElementById("par").textContent = stored.parent;

// add current date to Date Missed:
document.getElementById("date").textContent = currentDate;

// add additional info
document.getElementById("inf").textContent = stored.info;
  
})

// --------------- absence record end ------------


// ------------ api for meals start ------------
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


