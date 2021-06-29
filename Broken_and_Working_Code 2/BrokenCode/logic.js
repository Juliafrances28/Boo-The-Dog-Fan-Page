// When the factButton is clicked...
$("#factButton").on("click", function () {
  // We generate a random number between 0 & 6 (the number of facts in the booFactArray)
  var number = Math.random() * booFactArray.length;
  //We display the fact from the booFactsArray that is in the random position we just generated.
  $("#factText").text(booFactArray[number]);
});

// This array holds all of our Boo Dog facts!
var booFactArray = [
  "Boo is a pomeranian",
  "Boo's best friend is another pomeranian named Buddy",
  "Boo the Pomeranian was born on March 16",
  "Making him a Pisces",
  "Boo's favorite food is grass",
  "Boo has released two books",
];

// When the textPink button is pressed...
$("#textPink").on("click", function () {
  //Change funtext to pink.
  $("#funText").css("color", "pink");
});

//When the textOrange button is pressed...
$("#textOrange").on("click", function () {
  // Change funText to orange.
  $("#funText").css("color", "orange");
});

// When the textGreen button is pressed...
$("#textGreen").on("click", function () {
  // Change funText to green.
  $("#funText").css("color", "green");
});

//When the boxGrow button is clicked...
$("#boxGrow").on("click", function () {
  $("#box").animate({ height: "+=35px", width: "+=35px" }, "fast");
});

//Decrease the boxShrink button is clicked....
$("#boxShrink").on("click", function () {
  //Decrease the size of the box
  $("#box").animate({ height: "-=35px", width: "-=35px" }, "fast");
});
