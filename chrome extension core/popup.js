//author: Joey Cunningham & scott Crawford


const request = require('request');
const cheerio = require('cheerio');


var url2 ='https://medium.com/s/story/dmt-is-the-drug-for-our-collective-crisis-of-meaning-eddbb4bb697c';

var art =[];

request(url2, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    //console.log(html);
    console.log("running request");
    var $ = cheerio.load(html);
    console.log("loading");
    $("#story, p").each(function(i, elem){//gets the website and adds the article to the art array;
        art.push($(this).text());
        //console.log($(this).text());
    });
    console.log(art[0]);
  }//$("h2, div, p")
});



//var submitButton = document.getElementById("nameButton");
var automaticButton = document.getElementById("autoButton");

function getArticle(){
    return art;
}


//button for manual author name
//submitButton.addEventListener("click", readInName);
function readInName(){
    <!--stub for actual method -->
    alert("click detected");
}

//when user clicks automatic author analysis button
automaticButton.addEventListener("click", inPageAuthor);
function inPageAuthor(){

    //populate array with current active tab
    chrome.tabs.query({"active": true}, function(tabs){
        var currentURL = tabs[0].url; //set as current url of tab
        //alert(currentURL + "\n\nThis is a new line");

       // var output = getArticle();
        var rating = 0; // integer level of bias
        var author=  "temp"; //author of webpage
        //author = getArticle();

       // var art =  getArticle();
      

        //proof of concept code - displays data in a new tab
        //chrome.tabs.create({"active": false, "url": "debug.html"});


        //end proof of concept section


        //code to find author of webpage


        var bias; //numberical value of bias

        //code to calculate bias of author on webpage

        //link urls
        var url1; //these should be set to a default page in the future
        var url2;
        var url3;

        //code to set each of the article links

        //link elements to other pages
        var link1 = document.getElementById("link1");
        link1.setAttribute('href', url1)
        var link2 = document.getElementById("link2");
        link2.setAttribute('href', url2);
        var link3 = document.getElementById("link3");
        link3.setAttribute('href', url3);

        //adding html to results page
        document.getElementById("resultsHeading").innerHTML="Results:";
        document.getElementById("authorHeading").innerHTML="-Author: " + author;
        document.getElementById("biasHeading").innerHTML="-Bias: " + bias;
        document.getElementById("linksHeading").innerHTML="-Other Articles by " + author;
        document.getElementById("link1").innerHTML="Article 1";
        document.getElementById("link2").innerHTML="Article 2";
        document.getElementById("link3").innerHTML="Article 3";



    }
);


}
