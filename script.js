//  declare variables here.
let saveBtn = $("");
let myLabel = $("<label>");
let newDiv = $("<div/>");
let input = $("<input type='text' placeholder='What do you need to schedule to do today?' name='label-input'>");

// local storage
let myStorage = window.localStorage;

let key9 = localStorage.getItem("storedItem9");
$("#hour-9").val(key9);


let userInput10;
let userInput11;
let userInput12;
let userInput13;
let userInput14;
let userInput15;
let userInput16;
let userInput17;

let key10 = localStorage.getItem("storedItem10");
let key11 = localStorage.getItem("storedItem11");
let key12 = localStorage.getItem("storedItem12");
let key13 = localStorage.getItem("storedItem13");
let key14 = localStorage.getItem("storedItem14");
let key15 = localStorage.getItem("storedItem15");
let key16 = localStorage.getItem("storedItem16");
let key17 = localStorage.getItem("storedItem17");



//  the current day is displayed at the top of the calendar.
let currentDay = moment().format('MMMM Do YYYY,');
$("#currentDay").text(currentDay);

//  determine the current hour. 
let now = new Date();
console.log(now);
let hour = now.getHours();
console.log(hour);

// styling based on current hour
// if (hour > 17) {
//     $("#input-text").addClass("present");
// }
for (let i = 9; i < 18; i++) {
    let currentId = "#hour-" + i; 
    let currentHourBlock = $(currentId);
    // in the past..
    if (i < hour) {
        currentHourBlock.addClass("past");
    }
    else if (i > hour) {
        currentHourBlock.addClass("future");
    }
    // this is when i is equal to hour
    else { currentHourBlock.addClass("present");
}
}
 
// userInput9.val(key9); 
// $("div.9AM").siblings(".hour-9").text("key9");

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let buttonID = $(this).attr("id");
    console.log(buttonID);

    let userInput9 = $("#hour-9").val().trim();
    localStorage.setItem("storedItem9", JSON.stringify(userInput9))

    let userInput10 = $("#hour-10").val().trim();
    localStorage.setItem("storedItem10", JSON.stringify(userInput10))
    let key10 = localStorage.getItem("storedItem10");

    let userInput11 = $("#hour-11").val().trim();
    localStorage.setItem("storedItem11", JSON.stringify(userInput11))
    let key11 = localStorage.getItem("storedItem11");

    let userInput12 = $("#hour-12").val().trim();
    localStorage.setItem("storedItem12", JSON.stringify(userInput12))
    let key12 = localStorage.getItem("storedItem12");

    let userInput13 = $("#hour-13").val().trim();
    localStorage.setItem("storedItem13", JSON.stringify(userInput13))
    let key13 = localStorage.getItem("storedItem13");

    let userInput14 = $("#hour-14").val().trim();
    localStorage.setItem("storedItem14", JSON.stringify(userInput14))
    let key14 = localStorage.getItem("storedItem14");

    let userInput15 = $("#hour-15").val().trim();
    localStorage.setItem("storedItem15", JSON.stringify(userInput15))
    let key15 = localStorage.getItem("storedItem15");

    let userInput16 = $("#hour-16").val().trim();
    localStorage.setItem("storedItem16", JSON.stringify(userInput16))
    let key16 = localStorage.getItem("storedItem16");

    let userInput17 = $("#hour-17").val().trim();
    localStorage.setItem("storedItem17", JSON.stringify(userInput17))
    let key17 = localStorage.getItem("storedItem17");

});
// let key9 = localStorage.getItem("storedItem9");
    // $("div.9AM").siblings(".hour-9").text("key9");
    // $( "p" ).siblings( ".selected" ).css( "background", "yellow" );
    //$( "li.third-item" ).siblings().css( "background-color", "red" );
    // console.log(storedItem9);

// let userFirstNameSpan = document.querySelector("#user-first-name");
// let lastUser = JSON.parse(localStorage.getItem("user"));
//     userFirstNameSpan.textContent = lastUser.firstName;

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

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   let storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }}
