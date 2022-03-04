var today = moment(); //time
$("#currentDay").text(today.format("MMM Do, YYYY, H:mm:ss a"));
var currentHour = today.format("H");

//local storage
var btnsaveEl = document.querySelectorAll(".saveBtn");
var savedTaskEl = document.querySelectorAll(".description");

console.log(currentHour);
savedTaskEl.forEach(function (txtarea) {
  var hour = txtarea.parentNode.dataset["hour"];
  txtarea.value = localStorage.getItem(hour);
  var timeClass = "past";

  if (hour > currentHour) {
    timeClass = "future";
  } else if (hour == currentHour) {
    timeClass = "present";
  }

  txtarea.parentNode.classList.add(timeClass);
});

// add click event for each button
for (var i = 0; i < btnsaveEl.length; i++) {
  btnsaveEl[i].addEventListener("click", function (event) {
    event.preventDefault();
    var hour = event.currentTarget.parentNode.dataset["hour"];
    //console.log("clicked button for hour: " + hour);
    var txt = event.currentTarget.parentNode.children[1].value;
    //console.log("saving content: '" + txt + "'");
    localStorage.setItem(hour, txt);
  });
}
