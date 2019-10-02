var timeInput = $("#todo-text");
var timeForm = $("#t-body");
var saveBtn = $("#button");
var $currentDayElem = $("#currentDay");


currentDayFunc();
init();
renderTodos();
storeInputs();

// Current Date 
function currentDayFunc(){
    var currentDate = moment();
    $currentDayElem.text(currentDate.format('MMMM Do, YYYY'));

}

// set local storage 
function timeInput() {
  var timeInputStr = localStorage.getItem("t-body");
  if (!(timeInputStr === null || timeInputStr === "")) {
    inputs = JSON.parse(timeInputStr);
  }
   // store inputs in local storage
   function storeInputs() {
    localStorage.setItem("t-body", JSON.stringify(inputs));
  }

  function renderInputs() {
  
  
    }
  }

 

// set where input will be added when saved 
// todoInput is  added 
// saveBtn is clicked on 
// todoInput is saved into local storage 

// =========================================================
