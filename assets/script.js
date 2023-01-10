// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



// This section handles adding the current date to the header and will add and remove certain classes depending on the time of the day
var currday = dayjs().format("dddd, MMMM D")

console.log(currday)
console.log($("#currentDay"))
$("#currentDay").append(currday + 'th')


var eight = $("#hour-8")
var nine = $("#hour-9")
var ten= $("#hour-10")
var eleven = $("#hour-11")
var twelve = $("#hour-12")
var one = $("#hour-1")
var two = $("#hour-2")
var three = $("#hour-3")
var four = $("#hour-4")
var five = $("#hour-5")

var time = dayjs().format('H')

if(time < 8) {
  eight.addClass('future').removeClass('past', 'present')     
  nine.addClass('future').removeClass('past', 'present')  
  ten.addClass('future').removeClass('past', 'present') 
  eleven.addClass('future').removeClass('past', 'present') 
  twelve.addClass('future').removeClass('past', 'present') 
  one.addClass('future').removeClass('past', 'present') 
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time == 8) {
  eight.addClass('present').removeClass('past', 'future')    
  nine.addClass('future').removeClass('past', 'present')  
  ten.addClass('future').removeClass('past', 'present') 
  eleven.addClass('future').removeClass('past', 'present') 
  twelve.addClass('future').removeClass('past', 'present') 
  one.addClass('future').removeClass('past', 'present') 
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time == 9) {
  eight.addClass('past').removeClass('present', 'future')    
  nine.addClass('present').removeClass('past', 'future')  
  ten.addClass('future').removeClass('past', 'present') 
  eleven.addClass('future').removeClass('past', 'present') 
  twelve.addClass('future').removeClass('past', 'present') 
  one.addClass('future').removeClass('past', 'present') 
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time == 10) {
  eight.addClass('past').removeClass('present', 'future')  
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('present').removeClass('past', 'future') 
  eleven.addClass('future').removeClass('past', 'present') 
  twelve.addClass('future').removeClass('past', 'present') 
  one.addClass('future').removeClass('past', 'present') 
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}


if(time == 11) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future') 
  eleven.addClass('present').removeClass('past', 'future')
  twelve.addClass('future').removeClass('past', 'present') 
  one.addClass('future').removeClass('past', 'present') 
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time == 12) {
  eight.addClass('past').removeClass('present', 'future')    
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future') 
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('present').removeClass('past', 'future') 
  one.addClass('future').removeClass('past', 'present') 
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time ===13) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')  
  ten.addClass('past').removeClass('present', 'future')  
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('past').removeClass('present', 'future')  
  one.addClass('present').removeClass('past', 'future')
  two.addClass('future').removeClass('past', 'present') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time == 14) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future')  
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('past').removeClass('present', 'future')  
  one.addClass('past').removeClass('present', 'future')  
  two.addClass('present').removeClass('past', 'future') 
  three.addClass('future').removeClass('past', 'present')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}

if(time == 15) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future')  
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('past').removeClass('present', 'future')  
  one.addClass('past').removeClass('present', 'future')  
  two.addClass('past').removeClass('present', 'future') 
  three.addClass('present').removeClass('past', 'future')        
  four.addClass('future').removeClass('past', 'present') 
  five.addClass('future').removeClass('past', 'present') 
}


if(time == 16) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future')  
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('past').removeClass('present', 'future')  
  one.addClass('past').removeClass('present', 'future')  
  two.addClass('past').removeClass('present', 'future') 
  three.addClass('past').removeClass('present', 'future')       
  four.addClass('present').removeClass('past', 'future') 
  five.addClass('future').removeClass('past', 'present') 
}


if(time == 17) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future')  
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('past').removeClass('present', 'future')  
  one.addClass('past').removeClass('present', 'future')  
  two.addClass('past').removeClass('present', 'future') 
  three.addClass('past').removeClass('present', 'future')        
  four.addClass('past').removeClass('present', 'future') 
  five.addClass('present').removeClass('past', 'future') 
  
}

if(time > 17) {
  eight.addClass('past').removeClass('present', 'future')     
  nine.addClass('past').removeClass('present', 'future')   
  ten.addClass('past').removeClass('present', 'future')  
  eleven.addClass('past').removeClass('present', 'future') 
  twelve.addClass('past').removeClass('present', 'future')  
  one.addClass('past').removeClass('present', 'future')  
  two.addClass('past').removeClass('present', 'future') 
  three.addClass('past').removeClass('present', 'future')        
  four.addClass('past').removeClass('present', 'future') 
  five.addClass('past').removeClass('present', 'future') 
}

  });
