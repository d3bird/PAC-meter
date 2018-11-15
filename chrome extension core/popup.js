//author: Joey Cunningham & scott Crawford


const request = require('request');
const cheerio = require('cheerio');




var art =[];

function getBais() {
    var output = 0;



    return output;
}



//var submitButton = document.getElementById("nameButton");
var automaticButton = document.getElementById("autoButton");


function FindAuthor() {
    var output = "not found";
    var words;
    var found = false;
    for (var i = 0; i < art.length; i++) {
       
       // console.log("secton: " + i);
        try {
            //console.log(art[i].toString());
            words = art[i].split(" ");
            for (var q = 0; q < words.length; q++) {
                console.log(words[q]);
                if (words[q].trim() == "By") {
                   // console.log("found by");
                   // console.log(words.length);
                   // console.log(q);

                    if (!(words.length == (q - 1))) {
                        found = true;
                        //console.log("found the real");
                        output = "";
                       // console.log(words[q + 1].toString() );
                        output += words[q + 1] + " " + words[q + 2];
                        if (!(words.length == (q + 1))) {
                            if (words[q + 3].trim().toLowerCase() == "and") {
                                output += " and ";
                                output += words[q + 4] + " " + words[q + 5];
                            }
                        }
                    }

                }
            }

        } catch (err) {
            //console.log("could not convert part of article");
        }
    }
    console.log("the output is: " + output);
    return output;
}


//when user clicks automatic author analysis button
automaticButton.addEventListener("click", inPageAuthor);
function inPageAuthor(){

    //populate array with current active tab
    chrome.tabs.query({"active": true}, function(tabs){
        var currentURL = tabs[0].url; //set as current url of tab
      
        var rating = 0; // integer level of bias
        var author=  "temp"; //author of webpage
       
        request(currentURL, function (error, response, html) {
            if (!error && response.statusCode == 200) {
                //console.log(html);
                console.log("running request");
                var $ = cheerio.load(html);
                console.log("loading");

                //old way of getting the article
                /*$("#story, p").each(function (i, elem) {//gets the website and adds the article to the art array;
                    art.push($(this).text());
                    console.log($(this).text());
                    console.log();
                });*/
                //new way  of getting the article

                console.log("the article was created by");
                $("#author creator, p").each(function (i, elem) {//gets the website and adds the article to the art array;
                     art.push($(this).text());
                    //console.log($(this).text());
                    //console.log();
                });
                //console.log(art[0]);
            }//$("h2, div, p")
        });
       

        //proof of concept code - displays data in a new tab
        //chrome.tabs.create({"active": false, "url": "debug.html"});


        //end proof of concept section


        //code to find author of webpage
        author = FindAuthor();
        console.log(author);
        var bias = getBais(); //numberical value of bias

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
