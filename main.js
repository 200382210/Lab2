// Step 1a - Select and store each slider (range) input element
var redSlider = document.querySelector("#redSlider").value

var greenSlider = document.querySelector("#greenSlider").value

var blueSlider = document.querySelector("#blueSlider").value

// Step 1b - Select and store each number input element
var RedNum = document.querySelector('#redInput').value

var GreenNum = document.querySelector('#greenInput').value

var BlueNum = document.querySelector('#blueInput').value

// Step 1c - Select and store the colourPreview and message elements
var colourPreview = document.querySelector('#colourPreview').value

var message = document.querySelector('#message').value

// Step 1d - Select and store the .chosenColour node list
// in a variable called chosenColours
var chosenColours = document.querySelector('.chosenColour').value


// Step 2 - Create a function called sliderUpdate that takes an
// event as an argument
function sliderUpdate(e) {
 // Step 2a - Using destructuring, store the red, green, and blue slider values
 // into variables called r, g, and b

 var r, g, b;
 [r, g, b] = [redSlider,greenSlider,blueSlider];



  // Step 2b - Create a variable called rgb and store the following format
  // using interpolation to parse the r, g, and b values:
  // rgb(r, g, b)


  var rgb = `rgb(${RedNum},${GreenNum},${BlueNum})`


  // Step 2c - Access the style property of colourPreview and change
  // the background colour to our rgb variable value

   document.querySelector("#color-preview").style.backgroundColor = rgb;
  // Step 2d - Using colourPreview as the parent, select the #rgb element
  // and change the text content to equal our rgb variable value

  rgb = colourPreview.textContent

  // Step 2e - Using the event argument, access the target, then the parentElement,
  // then select the child, input[type="number"], and then its value property.
  // Make it equal the event target's value
  document.getElementById("RedNum").addEventListener("input", function(event) {
  event.target.textContent = rgb
});

document.getElementById("GreenNum").addEventListener("input", function(event) {
event.target.textContent = rgb
});

document.getElementById("BlueNum").addEventListener("input", function(event) {
event.target.textContent = rgb
});

}


// Step 3 - Create a function called inputUpdate that takes an event
// as an argument
function inputUpdate(){
  // Step 3a - Using destructuring, store the red, green, and blue input values
  // into variables called r, g, and b

  var r, g, b;
 [r, g, b] = [redSlider,greenSlider,blueSlider];

  // Step 3b - Create a variable called rgb and store the following format
  // using interpolation to parse the r, g, and b values:
  // rgb(r, g, b)

    var rgb = `rgb(${RedNum},${GreenNum},${BlueNum})`

  // Step 3c - Access the style property of colourPreview and change
  // the background colour to our rgb variable value

  document.querySelector("#color-preview").style.backgroundColor = rgb;

  // Step 3d - Using colourPreview as the parent, select the #rgb element
  // and change the text content to equal our rgb variable value
   rgb = colourPreview.textContent

  // Step 3e - Using the event argument, access the target, then the parentElement,
  // then select the child, input[type="range"], and then its value property.
  // Make it equal the event target's value
  document.getElementById("redSlider").addEventListener("input", function(event) {
  event.target.textContent = rgb
  });
  document.getElementById("blueSlider").addEventListener("input", function(event) {
  event.target.textContent = rgb
  });
  document.getElementById("greenSlider").addEventListener("input", function(event) {
  event.target.textContent = rgb
  });

}



// Step 4a - Without pushing to an array, create an array structure that contains
// the 3 slider elements. Call the for each method and iterate through each element.
// Using an arrow (or anonymous) function, subscribe the element to the oninput event,
// providing the sliderUpdate function as the callback argument
// providing the sliderUpdate function as the callback argument





// Step 4b - Without pushing to an array, create an array structure that contains
// the 3 input elements. Call the for each method and iterate through each element.
// Using an arrow (or anonymous) function, subscribe the element to the oninput event,
// providing the inputUpdate function as the callback argument



// Step 5 - Create a function that has one parameter called msg


  // Step 5a - Change the message text to equal the argument msg


  // Step 5b - Using a function that delays execution, change the
  // message content back to an empty string after 1500ms




// Step 6a - Create a new event called 'itsGreat'
var itsGreat = document.createEvent('event');

// Step 6b - Create a new event called 'selected'
var selected = document.createEvent('event');

// Step 6c - Add a new event listener to the message element that
// listens for 'itsGreat', and set the callback to call setMessage with the
// argument "It's going to look great!"




// Step 6d - Add a new event listener to the message element that
// listens for 'selected', and set the callback to call setMessage with the
// argument "That's an awesome colour!"



// Step 7 - Create a variable called 'pickedColour' and set its value to '#000'


// Step 8 - Subscribe colourPreview to a click event listener. Use an anonymous function
// as a the callback

  // Step 8a - Using a condition statement, check if the #rgb content is currently
  // an empty string

    // Step 8b - If it is, change the value of pickedColour to '#000'


    // Step 8c - Otherwise, change the value to the #rgb content



  // Step 8d - Publish the 'selected' event




// Step 9 - Using a for/of loop, iterate through chosenColours
// setting the initializer variable to chosenColour

  // Step 9a - Subscribe chosenColour to a click event, using
  // an anonymous function that takes an event as an argument

    // Step 9b - Access the background colour of the event target
    // and make it equal to the pickedColour value


    // Step 9c - Publish the 'itsGreat' event
