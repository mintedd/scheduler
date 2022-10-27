//add "todays date" in header
var currentDate = moment().format('dddd MMMM Do YYYY, h:mm a');
$('#currentDay').text(currentDate)

//need the gray, red, and green
//gray represents time past
//red is now
//green is in the future

//localstorage
//going to occur on a click
var saveBtn = $('.saveBtn')

saveBtn.on('click', function(){
    //textarea content is going to be saved 

})

//preventDefault