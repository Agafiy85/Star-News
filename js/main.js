window.addEventListener("load", Init);

function Init(){
    console.log("Init");
    var apiKey = "18f1c87e444741aca30db0a5bba999"
    var category = ["sports", "entertainment", "health", "sciene", "technology"];
    var callbackFunction = [
        { "news": sportsNews },
        { "news": sportsNews },
        { "news": sportsNews },
        { "news": sportsNews },
        { "news": sportsNews },
    ];
    arr[0].news;

    for (var i = 0; i < category.length; i++){
    console.log(category[i] + "News");
    Request(category[i], apiKey, callbackFunction[i].news);
}
    /*var urlSport = "https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY";
    var urlEntertainment = "https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=API_KEY";
    var urlHealth = "https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=API_KEY";
    var urlSciene = "https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=API_KEY";
    var urlTechnology = "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=API_KEY";
    Request(urlSport, SporNews);
    Request(urlEntertainment, EntertainmentNews);
    Request(urlHealth, HealthNews);
    Request(urlSciene, ScieneNews);
    Request(urlTechnology, TechnologyNews);*/

    


}
function Request(category, callback){
    var url = `https://newsapi.org/v2/top-headlines?country=${category}us&apiKey=API_KEY`;
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
      
     }
}
function SportsNews(news){
console.log(news);
}
function EntertainmentNews(news){
    console.log(news);
}
function HealthNews(news){
    console.log(news);
}
function ScieneNews(news){
    console.log(news);
}
function TechnologyNews(news){
    console.log(news);
}
