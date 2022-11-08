//add "todays date" in header
$(document).ready(function () {
    init();
    currentTime();
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

    var userInput = $(this).prev().val().trim()
    var hour = $(this).prev().prev().text()

    localStorage.setItem(hour, userInput)
    $('.notification').addClass('show')
    setTimeout(function () { $('.notification').removeClass('show') }, 3000)
})



function currentTime() {
    var rightNow = moment().hour()
    console.log(rightNow) // gives you hours in 24
    // var checkHour = parseInt($('.time-block').attr('id').split('-')[1])

    var timeBlock = $('.time-block')
    for (let i = 0; i < timeBlock.length; i++) {
        var currentBlock = timeBlock[i];
        if (timeBlock === rightNow) {
            $(this).addClass('present');
            $(this).removeClass('past')
        } else if (timeBlock < rightNow) {
            $(this).addClass('past');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    }
}