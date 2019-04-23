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

    for (var i = 0; i < 9; i++) {
      youtubeResults.push(results[i].id.videoId);
    }

    populateVideos(youtubeResults);
  });
}
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

// Function for pulling information from Giffy
function giffyAPI(searchQuery) {
  var array = [];
  var apiKey = "gOFweX8DFJNwBF8oAknmZryJWr6BXO4U";
  var requestURL =
    "https://api.giphy.com/v1/gifs/search?lang=en&limit=10&rating=PG&api_key=" +
    apiKey +
    "&q=";
  var finalURL = requestURL + searchQuery;
  $.ajax({ url: finalURL, method: "GET" }).then(function(response) {
    console.log(response);
    for (var i = 0; i < 9; i++) {
      array.push(response.data[i].images.original.webp);
    }
    populateResults(array);
  });
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

function populateVideos(arry) {
  $("#page2").css("display", "block");
  for (var i = 0; i < arry.length; i++) {
    $("#card" + i).css("display", "none");
    $("#card-" + i).append(
      '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' +
        arry[i] +
        '"allowfullscreen></iframe></div>'
    );
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
