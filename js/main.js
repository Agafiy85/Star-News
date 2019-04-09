window.addEventListener("load", Init);

function Init(){
    console.log("Init");
    var urlSport = "https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY";
    var urlentertainmentNews = "https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=API_KEY";
    var urlHealth = "https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=API_KEY";
    var urlSciene = "https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=API_KEY";
    Request(urlSport, SporNews);
    Request(urlentertainmentNews, entertainmentNews)

}
function Request(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
  }
    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    }
     else {
      var data = JSON.parse(xhr.responseText);
    callback(data);
      var data = xhr.responseText;
     }
}
function SporNews(news){
console.log(news);
}
function entertainmenNnews()