var searchButton = document.getElementById("searchBtn");
var navContainer = document.getElementById("navContainer");
var userInput = document.getElementById("charSearch");
var savedSearches = JSON.parse(localStorage.getItem("hero")) || [];
var currentSearch = savedSearches.length;
var imdbApiStart = "https://imdb-api.com/en/API/Search/"
var imdbKey = "k_zcmn64r8/";
var marvelApiStart =
  "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";
var marvelKey = "382f5c01d7625f70f8568701339fda29";
var ts = "thesoer";
var passhash = "e19ce609473ab49e72381d59be07f3e1";
console.log(passhash);

function getHeroInfo() {
  // getMovieInfo(userInput.value);
  var requestUrl = "https://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + marvelKey + "&hash=" + passhash
  console.log(requestUrl);
  var result = fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    
  return result;
}

function getMovieInfo(userSearch) {
    var requestUrl = imdbApiStart + imdbKey + userSearch
    var result = fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  return result;
}

function postHeroInfo(data) {

}

function postMovieInfo(data) {

}

searchButton.addEventListener("click", getHeroInfo);
