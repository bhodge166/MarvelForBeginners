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
var marvelOtherKey = "6fccef9913e6e9ecada27a1116c576156728194e";
var ts = 1564731162583;
var hash = ts +marvelKey+marvelOtherKey;
var passhash = "8e6942babd7a4b53d530f2022a5e4559";
console.log(hash);

function getHeroInfo() {
  getMovieInfo(userInput.value);
  var requestUrl = marvelApiStart + userInput.value + "&apikey=" + marvelKey + "&ts=" + ts + "&hash=" + passhash;
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
