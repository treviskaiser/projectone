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
function imageAPI(searchTerm) {
  var array = [];
  var flickerAPI =
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" +
    searchTerm;
  $.ajax({
    url: flickerAPI,
    dataType: "jsonp", // jsonp
    jsonpCallback: "jsonFlickrFeed"
  }).then(function(response) {
    for (var i = 0; i < 9; i++) {
      array.push(response.items[i].media.m);
    }
    populateResults(array);
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
