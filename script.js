//  declare variables here.
let saveBtn = $("");

// local storage will populate the input fields with any stored data...
function retrieveLocalStorage () {
let key9 = JSON.parse(localStorage.getItem("storedItem9"));
$("#hour-9").val(key9);

let key10 = JSON.parse(localStorage.getItem("storedItem10"));
$("#hour-10").val(key10);

let key11 = JSON.parse(localStorage.getItem("storedItem11"));
$("#hour-11").val(key11);

let key12 = JSON.parse(localStorage.getItem("storedItem12"));
$("#hour-12").val(key12);

let key13 = JSON.parse(localStorage.getItem("storedItem13"));
$("#hour-13").val(key13);

let key14 = JSON.parse(localStorage.getItem("storedItem14"));
$("#hour-14").val(key14);

let key15 = JSON.parse(localStorage.getItem("storedItem15"));
$("#hour-15").val(key15);

let key16 = JSON.parse(localStorage.getItem("storedItem16"));
$("#hour-16").val(key16);

let key17 = JSON.parse(localStorage.getItem("storedItem17"));
$("#hour-17").val(key17);
}

//  the current day is displayed at the top of the calendar...
let currentDay = moment().format('MMMM Do YYYY,');
$("#currentDay").text(currentDay);

//  determine the current hour... 
let now = new Date();
let hour = now.getHours();
console.log(hour);

// CSS styling based on the current hour...
for (let i = 9; i < 18; i++) {
    let currentId = "#hour-" + i;
    let currentHourBlock = $(currentId);
    // in the past...
    if (i < hour) {
        currentHourBlock.addClass("past");
    }
    // in the future...
    else if (i > hour) {
        currentHourBlock.addClass("future");
    }
    // this is when i is equal to current hour...
    else {
        currentHourBlock.addClass("present");
    }
}
// here is the on click event to execute save to local storage functionality...
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let buttonID = $(this).attr("id");
    console.log(buttonID);

    let userInput9 = $("#hour-9").val().trim();
    localStorage.setItem("storedItem9", JSON.stringify(userInput9))

    let userInput10 = $("#hour-10").val().trim();
    localStorage.setItem("storedItem10", JSON.stringify(userInput10))

    let userInput11 = $("#hour-11").val().trim();
    localStorage.setItem("storedItem11", JSON.stringify(userInput11))

    let userInput12 = $("#hour-12").val().trim();
    localStorage.setItem("storedItem12", JSON.stringify(userInput12))

    let userInput13 = $("#hour-13").val().trim();
    localStorage.setItem("storedItem13", JSON.stringify(userInput13))

    let userInput14 = $("#hour-14").val().trim();
    localStorage.setItem("storedItem14", JSON.stringify(userInput14))

    let userInput15 = $("#hour-15").val().trim();
    localStorage.setItem("storedItem15", JSON.stringify(userInput15))

    let userInput16 = $("#hour-16").val().trim();
    localStorage.setItem("storedItem16", JSON.stringify(userInput16))

    let userInput17 = $("#hour-17").val().trim();
    localStorage.setItem("storedItem17", JSON.stringify(userInput17))
});

retrieveLocalStorage ()