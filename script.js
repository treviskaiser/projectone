var youtubeResults, movieResults, googleResults, searchQuery;

function youtubeAPI(searchTerm) {
  //Trevis' code
  var array = [];

  return array;
}

function movieAPI(searchTerm) {
  var array = [];
  //John's code
  return array;
}

function googleAPI(searchTerm) {
  var array = [];
  //Scott's Code
  return array;
}

$(".firstPage").attr("display", "hidden");
$(".secondPage").attr("display", "visible");

youtubeResults = youtubeAPI();
for (var i = 0; i < 3; i++) {
  $("#getIDfromLEAH").text(youtubeResults[i]);
  //Call function to push to firebase
}

function pushToFirebase() {
  //Code to push to firebase
}

function createPage() {
  //Pushing to the final page
}

$("#searchButton").on("click", function(event) {
  event.preventDefault;
  //Call the function to run through each API search
});
