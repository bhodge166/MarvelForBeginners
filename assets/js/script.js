var searchButton = document.getElementById("searchBtn");
var navContainer = document.getElementById("navContainer");
var userInput = document.getElementById("charSearch");
var savedSearches = JSON.parse(localStorage.getItem("hero")) || [];
var currentSearch = savedSearches.length;
var imdbApiStart = "https://imdb-api.com/en/API/Search/"
var imdbKey = "k_zcmn64r8/";
var marvelApiStart =
  "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";
// var marvelKey = "382f5c01d7625f70f8568701339fda29";
var marvelKey = "4c9ca99e3f0b2fc408ca2304c08ed1f3";
var marvelOtherKey = "6fccef9913e6e9ecada27a1116c576156728194e";
var ts = "thesoer";
var hash = ts +marvelKey+marvelOtherKey;
// var passhash = CryptoJS.MD5(hash).toString();
var passhash = "7f0d8cdc52b9c3675f313ab47cf5d731";
console.log(passhash);

function getHeroInfo() {
  // getMovieInfo(userInput.value);
  var requestUrl = "https://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + marvelKey + "&hash=" + passhash;
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
