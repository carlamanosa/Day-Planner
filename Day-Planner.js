var $currentDayElem = $("#currentDay");


currentDayFunc();



function currentDayFunc(){

    $currentDayElem.text(moment().format('MMMM Do, YYYY'));
}

console.log(currentDayFunc());

