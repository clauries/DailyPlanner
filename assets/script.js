// Adding time to header
$(document).ready(function() {
  let date = $( ".date");
  let now = moment().format("MMM Do YY");
  date.text(now);

});

//Changing color of textarea background depending on time
let currentHour = moment().hours();

function hourUpdater() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[2]);

    if (currentHour > 12){
      currentHour= currentHour -12}

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
}
//Call hourUpdater
hourUpdater();

//Click function to save data to local storage
$(document).ready(function() {
 
  let planArea9 = document.querySelector("#planning-area-9");
  let planArea10 = document.querySelector("#planning-area-10");
  let planArea11 = document.querySelector("#planning-area-11");
  let planArea12 = document.querySelector("#planning-area-12");
  let planArea1 = document.querySelector("#planning-area-13");
  let planArea2 = document.querySelector("#planning-area-14");
  let planArea3 = document.querySelector("#planning-area-15");
  let planArea4 = document.querySelector("#planning-area-16");
  let planArea5 = document.querySelector("#planning-area-17");
  let btn = $(".saveBtn");

  btn.on("click", function() {
    console.log(
    $(this).siblings('.time-block').val()
    );
    console.log($(this).attr("data-lsName"))
    localStorage.setItem($(this).attr("data-lsName"), $(this).siblings('.time-block').val())
  });

  //load local storage into textarea
  pullFromStorage();

  function pullFromStorage() {
    var savedText9 = localStorage.getItem("text9");
    planArea9.value = savedText9;

    var savedText10 = localStorage.getItem("text10");
    planArea10.value = savedText10;

    var savedText11 = localStorage.getItem("text11");
    planArea11.value = savedText11;

    var savedText12 = localStorage.getItem("text12");
    planArea12.value = savedText12;

    var savedText1 = localStorage.getItem("text1");
    planArea1.value = savedText1;

    var savedText2 = localStorage.getItem("text2");
    planArea2.value = savedText2;

    var savedText3 = localStorage.getItem("text3");
    planArea3.value = savedText3;

    var savedText4 = localStorage.getItem("text4");
    planArea4.value = savedText4;

    var savedText5 = localStorage.getItem("text5");
    planArea5.value = savedText5;

    }

});

