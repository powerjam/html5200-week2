//"We need a new spirit of *community*, a sense that *we* are all in this together, or the *American* *Dream* will continue to *wither*. Our destiny is bound up with the destiny of every other American." - Bill Clinton 


var static_words1 = "We need a new spirit of ";
var static_words2 = ", a sense that we are all in this together, or the ";
var static_words3 = " ";
var static_words4 = " will continue to ";
var static_words5 = ". Our destiny is bound up with the ";
var static_words6 = " of every other American.";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt); //stops form from submitting by preventing its default action

  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6);
}
  
  


//IN-CLASS PRACTICE 1/21

//comment a single line

/* 
  Block Comment
    */

//Variables are nothing more than labels or containers that hold data over time
/*
var greeting = "hello! ";

var first_name = "jamie";

var last_name = "do";

var message1 = "don't forget to pick up these items";

var message2 = "also, make sure to gather wood, for dooms day prepping";

var favorite_quote = "\"Four Score...\"";
//var my_image = "<img src=\"images/myImage.png\" />";
//use single quotes if you have a lot of illegal characters
var my_image = '<img src="images/myImage.png" />';

var goodbye = "see you later";
*/

/*Operators
  "="   assigns values
  "+="  (concatenation assignment operator, with strings) adds to whatever the variable currently has
*/

/*BAD variable names (errors!!!!)
  var first name = "";
  var 2first_name = "";
  var math = "";
*/

/*Adding special characters within variable value/string
  \  Add back slash to the left of a character that you want to display within the variable
*/

/*
console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favorite_quote);
*/

//console.log(greeting + first_name + " " + last_name + ", " + message1 + ". " + message2 + ". " + favorite_quote + " " + goodbye);

