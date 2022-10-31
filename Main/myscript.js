//add "todays date" in header
$(document).ready(function () {
    init();
    currentTime()
})

var currentDate = moment().format('dddd MMMM Do YYYY, h:mm a');
$('#currentDay').text(currentDate)

//localstorage
function init() {
    var hour = document.querySelectorAll('.hour') //returns an array
    for (let i = 0; i < hour.length; i++) {
        let element = hour[i].textContent;
        var userInputAtHour = localStorage.getItem(element)

        if (userInputAtHour !== null)
            $('.description')[i].append(userInputAtHour)
    }
}

//going to occur on a click
var saveBtn = $('.saveBtn')

saveBtn.on('click', function (e) {
    e.preventDefault

    var userInput = $(this).prev().val()
    var hour = $(this).prev().prev().text()

    localStorage.setItem(hour, userInput)
})

function currentTime(){
    var rightNow = moment().hour()
    console.log(rightNow) // gives you hours in 24
    // var checkHour = parseInt($('.time-block').attr('id').split('-')[1])
    
    var timeBlock = $('.time-block')
    console.log(timeBlock)
    for (let i = 0; i < checkHour.length; i++) {
        const element = checkHour[i];
        
    }
    console.log(checkHour)
}
//user input has to remain everytime browser is opened

//need the gray, red, and green
//gray represents time past
//red is now
//green is in the future