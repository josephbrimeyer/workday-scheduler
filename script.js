//  declare variables here.
let tableRow = $("<tr>'what to do'</tr>");
let createEvent = $("<td>").text("");
let saveBtn = $("");
//  let timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let myLabel = $("<label>");
let newDiv = $("<div/>");
let input = $("<input type='text' placeholder='What do you need to schedule to do today?' name='label-input'>");
let myStorage = window.localStorage;

//  the current day is displayed at the top of the calendar.
let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);

// init()

//  determine the current hour. 
let now = new Date();
console.log(now);
let hour = now.getHours();
console.log(hour);

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

  $(".saveBtn").on( "click", function(event) {
    event.preventDefault();
    buttonID=this.id;
    var x = document.getElementById(buttonID);
    console.log(buttonID);
    let userInput = $("#hour-9").val().trim();
    localStorage.setItem("storedItem", JSON.stringify(userInput))
    console.log(localStorage.getItem("storedItem"));

});
    
    

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