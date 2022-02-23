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
var ts = new Date().getTime();
var hash = ts +marvelKey+marvelOtherKey;
var passhash = CryptoJS.MD5(hash).toString();
console.log(passhash);
var comicVineKey = "f65430ace95c4595f1d40c11b52e95b0c5884d47";
var comicVineStart = "https://comicvine.gamespot.com/api/characters?format=json&api_key="

function getHeroInfo() {
  getMovieInfo(userInput.value);
  var requestUrl = comicVineStart + comicVineKey + "&name=" + userInput.value
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
