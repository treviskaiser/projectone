// instaFan Code

// Variable Declarations
var youtubeResults, movieResults, googleResults, searchQuery;

// Firebase

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA6CUw_ZqftdMnYLWf0BivA-UohmxIaHs4",
  authDomain: "instafan-a04f2.firebaseapp.com",
  databaseURL: "https://instafan-a04f2.firebaseio.com",
  projectId: "instafan-a04f2",
  storageBucket: "instafan-a04f2.appspot.com",
  messagingSenderId: "897405597530"
};
firebase.initializeApp(config);
var database = firebase.database();

// Function for pulling information from youtube
function youtubeAPI(searchTerm) {
  youtubeResults = [];

  var queryURL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
    searchTerm +
    "&key=AIzaSyD0ANJZ_xV6795iaJd5Rm42wrZIqWnzxkI";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.items;

    for (var i = 0; i < results.length; i++) {
      youtubeResults.push(results[i].snippet.thumbnails.high.url);
    }

    populateResults(youtubeResults);
  });
}

// Function for pulling information from ODB
function movieAPI(searchTerm) {
  var array = [];
  //John's code
  return array;
}

// Function for pulling information from from google images
function googleAPI(searchTerm) {
  var array = [];
  var apiKey = "&key=AIzaSyDKNhj5yvKuPDXdxrlQeKvGSH6WVq2owEM";
  var requestURL = "https://www.googleapis.com/customsearch/v1?q=";
  var finalURL = requestURL + searchTerm + apiKey;

  $.ajax({ url: finalURL, method: "GET" }).then(function(response) {});
  return array;
}

function createPage() {
  //Pushing to the final page
}

function populateResults(arry) {
  $("#page2").css("display", "block");
  for (var i = 0; i < arry.length; i++) {
    $("#card" + i)
      .attr("src", arry[i])
      .attr("width", "200");
  }
}

// ----------------------------------- //
//      MAIN PROGRAM STARTS HERE
// ----------------------------------- //

$("#page2").css("display", "none");
$("#page3").css("display", "none");

// Waits for the search input
$("#inputButton").on("click", function(event) {
  event.preventDefault;
  searchQuery = $("#inputSearch").val();
  $("#page1").css("display", "none");

  youtubeAPI(searchQuery);
});

$("img").on("click", function() {
  var selectedURL = $(this).attr("src");
  database.ref().push({
    selectedURL
  });
  // Count, when we hit three, call the next api
  // If we are already on the final API, then call final page
});
