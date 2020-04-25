//  declare variables here.
let saveBtn = $("");
let myLabel = $("<label>");
let newDiv = $("<div/>");
let input = $("<input type='text' placeholder='What do you need to schedule to do today?' name='label-input'>");
let myStorage = window.localStorage;
//  let timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//  the current day is displayed at the top of the calendar.
let currentDay = moment().format('MMMM Do YYYY,');
$("#currentDay").text(currentDay);

// init()

//  determine the current hour. 
let now = new Date();
console.log(now);
let hour = now.getHours();
console.log(hour);
// styling based on current hour
if (hour > 2) {
    $("#input-text").addClass("present");
}

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let buttonID = $(this).attr("id");
    console.log(buttonID);
    
    let userInput9 = $("#hour-9").val().trim();
    localStorage.setItem("storedItem9", JSON.stringify(userInput9))
    console.log(localStorage.getItem("storedItem9"));
    
    let userInput10 = $("#hour-10").val().trim();
    localStorage.setItem("storedItem10", JSON.stringify(userInput10))
    console.log(localStorage.getItem("storedItem10"));
    
    let userInput11 = $("#hour-11").val().trim();
    localStorage.setItem("storedItem11", JSON.stringify(userInput11))
    console.log(localStorage.getItem("storedItem11"));
    
    let userInput12 = $("#hour-12").val().trim();
    localStorage.setItem("storedItem12", JSON.stringify(userInput12))
    console.log(localStorage.getItem("storedItem12"));
    
    let userInput13 = $("#hour-13").val().trim();
    localStorage.setItem("storedItem13", JSON.stringify(userInput13))
    console.log(localStorage.getItem("storedItem13"));
    
    let userInput14 = $("#hour-14").val().trim();
    localStorage.setItem("storedItem14", JSON.stringify(userInput14))
    console.log(localStorage.getItem("storedItem14"));
    
    let userInput15 = $("#hour-15").val().trim();
    localStorage.setItem("storedItem15", JSON.stringify(userInput15))
    console.log(localStorage.getItem("storedItem15"));
    
    let userInput16 = $("#hour-16").val().trim();
    localStorage.setItem("storedItem16", JSON.stringify(userInput16))
    console.log(localStorage.getItem("storedItem16"));
    
    let userInput17 = $("#hour-17").val().trim();
    localStorage.setItem("storedItem17", JSON.stringify(userInput17))
    console.log(localStorage.getItem("storedItem17"));

});

// if id to identify the textfield is = currentDay, then set style to .present
// if id to identify the textfield is < currentDay, then set the style to .past
// if id to identify the textfield is > currentDay, then set the style to .future

// function createCalendar() {
//     for (let i = 0; i < 8; i++) {
//         myLabel.addClass("time-slot");
//         myLabel.text(timeArray[i]);
//         input.attr("id", i);
//         // myLabel.attr("text-input", timeArray[i]);
//         // $("time-slot").append();
//         // console.log(i);
//     }
// }
// createCalendar();

// $(".saveBtn").on( "click", function() {
//     var myClass = $(this).attr("id");
//     console.log(myClass);
//   });


// $(".btn-10").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput10 = $("#hour-10").val().trim();
//     localStorage.setItem("storedItem10", JSON.stringify(userInput10))
//     console.log(localStorage.getItem("storedItem10"));

// });
// $(".btn-11").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput11 = $("#hour-11").val().trim();
//     localStorage.setItem("storedItem11", JSON.stringify(userInput11))
//     console.log(localStorage.getItem("storedItem11"));

// });
// $(".btn-12").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput12 = $("#hour-12").val().trim();
//     localStorage.setItem("storedItem12", JSON.stringify(userInput12))
//     console.log(localStorage.getItem("storedItem12"));

// });
// $(".btn-13").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput13 = $("#hour-13").val().trim();
//     localStorage.setItem("storedItem13", JSON.stringify(userInput13))
//     console.log(localStorage.getItem("storedItem13"));

// });
// $(".btn-14").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput14 = $("#hour-14").val().trim();
//     localStorage.setItem("storedItem14", JSON.stringify(userInput14))
//     console.log(localStorage.getItem("storedItem14"));

// });
// $(".btn-15").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput15 = $("#hour-15").val().trim();
//     localStorage.setItem("storedItem15", JSON.stringify(userInput15))
//     console.log(localStorage.getItem("storedItem15"));

// });
// $(".btn-16").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput16 = $("#hour-16").val().trim();
//     localStorage.setItem("storedItem16", JSON.stringify(userInput16))
//     console.log(localStorage.getItem("storedItem16"));

// });
// $(".btn-17").on("click", function (event) {
//     event.preventDefault();
//     let buttonID = $(this).attr("id");
//     console.log(buttonID);
//     let userInput17 = $("#hour-17").val().trim();
//     localStorage.setItem("storedItem17", JSON.stringify(userInput17))
//     console.log(localStorage.getItem("storedItem17"));

// });






// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   let storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }}
// add event listener to add event button
// every time I click it looks to see what input it is next to, gets text, and writes to local storage.
// access input text when any click happens.
//add event
//functions here.
// function renderButtons() {

//     // Deleting the movies prior to adding new movies
//     // (this is necessary otherwise we will have repeat buttons)
//     $("#buttons-view").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < movies.length; i++) {

//       // Then dynamicaly generating buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adding a class of movie to our button
//       a.addClass("movie");
//       // Adding a data-attribute
//       a.attr("data-name", movies[i]);
//       // Providing the initial button text
//       a.text(movies[i]);
//       // Adding the button to the HTML
//       $("#buttons-view").append(a);
//     }
//   }

//   // This function handles events where one button is clicked
//   $("#add-movie").on("click", function(event) {
//     // Preventing the buttons default behavior when clicked (which is submitting a form)
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var movie = $("#movie-input").val().trim();

//     // Adding the movie from the textbox to our array
//     movies.push(movie);

//     // Calling renderButtons which handles the processing of our movie array
//     renderButtons();

//   });