window.addEventListener("load", Init);

function Init() {
    console.log("Init");
    var apiKey = "ac4c1819fc814b4da5f6a7d81ecc1596";

    
    var category = ["sport", "entertainment", "science", "business", "technology"];
    var callbackFunction = [
        { news: sportNews },
        { news: entertainmentNews },
         { news: scienceNews },
          { news: businessNews },
          { news: technologyNews }

    ];

    callbackFunction[0].news;

    /* var urlSport = "https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
     var urlEntertainment = "https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
     var urlScience = "https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
     var urlBusiness = "https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
     var urlTechnology = "https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    
     Request(urlSport, sportNews);
     Request(urlEntertainment, entertainmentNews);
     Request(urlScience, scienceNews);
     Request(urlBusiness, businessNews);
     Request(urlTechnology, technologyNews);
 */

    for (var i = 0; i < category.length; i++)
        //console.log(category[i]+"News");
        Request(category[i], apiKey, callbackFunction[i].news);

}

function Request(category, apiKey, callback) {

    var url = `https://newsapi.org/v2/top-headlines?country=au&category=${category}&apiKey=${apiKey}`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            var data = JSON.parse(xhr.responseText);
             console.log(data);  
            callback(data);
        }
    }
}



function sportNews(news) {
    console.log("sportNews", news);
    var sportElem = document.querySelector("#sport");
    console.log(sportElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        sportElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        sportElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        sportElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        sportElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        sportElem.appendChild(publishedAt);
    }
}

function entertainmentNews(news) {
    console.log("entertainmentNews", news.articles);
    var entertainmentElem = document.querySelector("#entertainment");
    console.log(entertainmentElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        entertainmentElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        entertainmentElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        entertainmentElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        entertainmentElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        entertainmentElem.appendChild(publishedAt);
    }
}
function scienceNews(news) {
  console.log("scienceNews", news.articles);
  var scienceElem = document.querySelector("#science");
  console.log(scienceElem);

  for (var i = 0; i < 5; i++) {

      var h3 = document.createElement('h3');
      h3.className = "news_title";
      h3.innerHTML = news.articles[i].title;
      scienceElem.appendChild(h3);

      var img = document.createElement('img');
      img.setAttribute("src", news.articles[i].urlToImage);
      img.setAttribute("alt", news.articles[i].title);
      img.className = "news_img";
      scienceElem.appendChild(img);

      var desc = document.createElement('p');
      desc.className = "news_description";
      desc.innerHTML = news.articles[i].description;
      scienceElem.appendChild(desc);

      var author = document.createElement('span');
      author.className = "news_author";
      author.innerHTML = news.articles[i].author;
      scienceElem.appendChild(author);

      var publishedAt = document.createElement('span');
      publishedAt.className = "news_publishedAt";
      publishedAt.innerHTML = news.articles[i].publishedAt;
      scienceElem.appendChild(publishedAt);
  }
}

function businessNews(news) {
  console.log("businessNews", news.articles);
  var businessElem = document.querySelector("#business");
  console.log(businessElem);

  for (var i = 0; i < 5; i++) {

      var h3 = document.createElement('h3');
      h3.className = "news_title";
      h3.innerHTML = news.articles[i].title;
      businessElem.appendChild(h3);

      var img = document.createElement('img');
      img.setAttribute("src", news.articles[i].urlToImage);
      img.setAttribute("alt", news.articles[i].title);
      img.className = "news_img";
      businessElem.appendChild(img);

      var desc = document.createElement('p');
      desc.className = "news_description";
      desc.innerHTML = news.articles[i].description;
      businessElem.appendChild(desc);

      var author = document.createElement('span');
      author.className = "news_author";
      author.innerHTML = news.articles[i].author;
      businessElem.appendChild(author);

      var publishedAt = document.createElement('span');
      publishedAt.className = "news_publishedAt";
      publishedAt.innerHTML = news.articles[i].publishedAt;
      businessElem.appendChild(publishedAt);
  }
}

function technologyNews(news) {
  console.log("technologyNews", news.articles);
  var technologyElem = document.querySelector("#technology");
  console.log(technologyElem);

  for (var i = 0; i < 5; i++) {

      var h3 = document.createElement('h3');
      h3.className = "news_title";
      h3.innerHTML = news.articles[i].title;
      technologyElem.appendChild(h3);

      var img = document.createElement('img');
      img.setAttribute("src", news.articles[i].urlToImage);
      img.setAttribute("alt", news.articles[i].title);
      img.className = "news_img";
      technologyElem.appendChild(img);

      var desc = document.createElement('p');
      desc.className = "news_description";
      desc.innerHTML = news.articles[i].description;
      technologyElem.appendChild(desc);

      var author = document.createElement('span');
      author.className = "news_author";
      author.innerHTML = news.articles[i].author;
      technologyElem.appendChild(author);

      var publishedAt = document.createElement('span');
      publishedAt.className = "news_publishedAt";
      publishedAt.innerHTML = news.articles[i].publishedAt;
      technologyElem.appendChild(publishedAt);
  }
}

var xhr = new XMLHttpRequest();
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
xhr.open("GET", url, true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
        var errStatus = xhr.status;
        var errText = xhr.statusText;
        console.log(errStatus + ": " + errText);
    } else {
        var data = JSON.parse(xhr.responseText);
        //ShowCurrency(data);
        console.log(data);
        console.log(buy_table(data));
    }
}





function buy_table(data) {
    var usd = document.querySelector(".usd");
    usd.innerHTML = (data[0].ccy);
    var eur = document.querySelector(".euro");
    eur.innerHTML = (data[1].ccy);
    var rur = document.querySelector(".rur");
    rur.innerHTML = (data[2].ccy);
    var btc = document.querySelector(".btc");
    btc.innerHTML = (data[3].ccy);

    var usd_buy = document.querySelector(".usd_buy");
    usd_buy.innerHTML = data[0].buy;

    var usd_sale = document.querySelector(".usd_sell");
    usd_sale.innerHTML = data[0].sale;

    var eur_buy = document.querySelector(".eur_buy");
    eur_buy.innerHTML = data[1].buy;

    var eur_sell = document.querySelector(".eur_sell");
    eur_sell.innerHTML = data[1].sale;

    var rur_buy = document.querySelector(".rur_buy");
    rur_buy.innerHTML = data[2].buy;

    var rur_sell = document.querySelector(".rur_sell");
    rur_sell.innerHTML = data[2].sale;

    var btc_buy = document.querySelector(".btc_buy");
    btc_buy.innerHTML = data[3].buy;

    var btc_sell = document.querySelector(".btc_sell");
    btc_sell.innerHTML = data[3].sale;
}