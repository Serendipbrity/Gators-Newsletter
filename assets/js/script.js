var current = document.querySelector("#currentDay");

let date = new Date();
let day = date.getDate();
let month = date.getMonth()  + 1;
let year = date.getFullYear();

let fullDate = `${month}.${day}.${year}`;
console.log("Full date: " + fullDate);

current.innerHTML = "Date: " + fullDate;