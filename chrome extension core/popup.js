//author: Joey Cunningham, Scott Crawford, Tim Minear & Jesse Runner


const request = require('request');
const cheerio = require('cheerio');

var keywords = ["abortion", //d
        "affirmative action", //d
        "alternative energy", //
        "armed teachers", //r
        "bitcoin", //
        "border security", //r
        "border wall", //r
        "campaign finance", //
        "candidate transparency", //
        "capital gains tax", //d
        "china tariffs", //r
        "citizenship test", //
        "climate change", //d
        "confederate flag", //r
        "corporate mega mergers", //
        "corporate tax", //d
        "criminal politicians", //
        "cuba", //
        "dakota access pipeline", //r
        "death penalty", //r
        "deportation", //r
        "deporting criminal immigrants", //r
        "domestic jobs", //r
        "drones", //
        "drug policy", //
        "drug price regulation", //
        "dual citizenship", //
        "economic stimulus", //d
        "edward snowden", //
        "electoral college", //
        "eminent domain", //
        "equal pay", //d
        "estate tax", //d
        "euthanasia", //
        "farm subsidies", //r
        "federal reserve", //
        "first amendment", //
        "flag burning", //
        "foreign aid", //d
        "foreign elections", //
        "foreign lobbying", //
        "fracking", //r
        "gmo labels", //r
        "gay marriage", //d
        "gender identity", //d
        "gender workplace diversity", //d
        "gerrymandering", //d
        "government mandates", //
        "government pensions", //
        "government spending", //r
        "gun control", //d
        "gun liability", //d
        "isis", //r
        "isis ground troops", //r
        "illegal immigrant detention", //r
        "immigrant assimilation", //d
        "immigrant children", //d
        "immigrant laborers", //d
        "immigration", //r
        "immigration ban", //r
        "immigration healthcare", //d
        "in-state tuition", //
        "israel", //r
        "lgbt", //d
        "labor unions", //d
        "lobbyist", //
        "mandatory military service", //
        "mandatory vaccines", //
        "marijuana", //d
        "medicaid", //d
        "medicaid work requirement", //r
        "medicare drug prices", //
        "mental health", //
        "military spending", //d
        "minimum voting age", //
        "minimum wage", //d
        "muslim immigrants", //r
        "muslim surveillance", //r
        "nafta", //
        "nato", //
        "nsa domestic surveillance", //r
        "nsa surveillance", //r
        "net neutrality", //d
        "niqāb", //d
        "no-fly list gun control", //d
        "north korea military strikes", //r
        "nuclear energy", //
        "obamacare", //d
        "offshore banking", //
        "oil drilling", //r
        "online sales tax", //
        "overtime pay", //
        "paid sick leave", //
        "patriot act", //
        "pension reform", //
        "plastic product ban", //
        "pre-existing conditions", //
        "property taxes", //
        "pro life", //r
        "pro-life", //r
        "religious freedom act", //d
        "right of foreigners to vote", //d
        "safe haven", //d
        "safe spaces", //d
        "sanctuary cities", //d
        "single-payer healthcare", //
        "skilled immigrants", //
        "social media regulation", //r
        "social security", //
        "space exploration", //
        "syrian refugees", //
        "tariffs", //r
        "taxes", //r
        "term limits", //
        "terrorism", //
        "torture", //
        "ukraine", //
        "united nations", //
        "universal basic income", //
        "va privatization", //
        "voter fraud", //
        "war on isis", //r
        "welfare", //d
        "welfare drug testing", //r
        "whistleblower protection", //
        "women in combat", //d
        "yemen" //

];



var keyvalue = [
        'd',
        'd',
        'o',
        'r',
        'o',
        'r',
        'r',
        'o',
        'd',
        'r',
        'o',
        'd',
        'r',
        'o',
        'd',
        'o',
        'o',
        'r',
        'r',
        'r',
        'r',
        'r',
        'o',
        'o',
        'o',
        'o',
        'd',
        'o',
        'o',
        'o',
        'd',
        'd',
        'o',
        'r',
        'o',
        'o',
        'o',
        'd',
        'o',
        'o',
        'r',
        'r',
        'd',
        'd',
        'd',
        'd',
        'o',
        'o',
        'r',
        'd',
        'd',
        'r',
        'r',
        'r',
        'd',
        'd',
        'd',
        'r',
        'r',
        'd',
        'o',
        'r',
        'd',
        'd',
        'o',
        'o',
        'o',
        'd',
        'd',
        'r',
        'o',
        'o',
        'd',
        'o',
        'd',
        'r',
        'r',
        'o',
        'o',
        'r',
        'r',
        'd',
        'd',
        'd',
        'r',
        'o',
        'd',
        'o',
        'r',
        'o',
        'o',
        'o',
        'o',
        'o',
        'o',
        'o',
        'o',
        'r',
        'r',
        'o',
        'd',
        'd',
        'd',
        'd',
        'd',
        'o',
        'o',
        'r',
        'o',
        'o',
        'o',
        'r',
        'r',
        'o',
        'o',
        'o',
        'o',
        'o',
        'o',
        'o',
        'o',
        'r',
        'd',
        'r',
        'o',
        'd',
        'o',


];


function removePunctuation(word) {

        var n = word //only checking for punctuation at the end of the word

          //common punctuation
        if (n[n.length - 1] == '.' || n[n.length - 1] == '?' || n[n.length - 1] == ',' || n[n.length-1] == '!' || n[n.length-1] == ":") {
                word = word.substr(0, n.length - 1); //parse the last character off
        }

        return word; //return the word

  }

function findnegation (paragraph, index){
  var negations = ["barely",
          "can't",
          "couldn't",
          "doesn't",
          "don't",
          "hardly",
          "isn't",
          "neither",
          "never",
          "no",
          "nobody",
          "none",
          "not",
          "nothing",
          "nowhere",
          "scarcely",
          "shouldn't",
          "wasn't",
          "won't",
          "wouldn't"
  ]
var length = paragraph.length - 1; // used for boundary conditions
var n = paragraph; //
var bool = false; // bool condition used to determine if negation is used

for (var i = index; i > 0 || n[i.length - 1] == '.' || n[i.length - 1] == '?'; i--){ // checks the same sentence the keyword was found in moving backwards in sentence
    for (var j = 0; j < negations.length - 1; j++){
      if(n[i] == negations[j])
          bool = true;
    }
}

for (var i = index; i < length || n[i.length - 1] == '.' || n[i.length - 1] == '?'; i++){ // checks the same sentence the keyword was found in moving forwards in sentence
    for( var j = 0; j < negations.length - 1; j++){
          if (n[i] == negations[j])
            bool = true;
    }
}
return bool;
}

var art = [];



function getBais() {
        var total = 0; // the score
        var rscore = 0; // republican score
        var dscore = 0; // democrat score

        var words;
        var parsed;
        var negationfound; // bool variable used to determine whether to detract from Rscore/Dscore

        console.log("searching for pollitical buzz words");

        for (var i = 0; i < (art.length); i++) { //loops through each readible paragraph
                try {
                        words = art[i].split(" ");
                        console.log(words);
                        for (var q = 0; q < (words.length); q++) { //loops through each word
                                //make sure the word is lowercase
                                parsed = words[q]
                                parsed = parsed.toLowerCase();

                                //removes any punctiation from the word in question (implemented)
                                parsed = removePunctuation(parsed);

                                for (var x = 0; x < (keywords.length - 1); x++) { //loops through all keywords

                                        if (keywords[x].indexOf(" ") == -1) { // if there is no spaces

                                                if (parsed == keywords[x]) { // if the word matchs the keyword
                                                        console.log(words[q]);
                                                        negationfound = findnegation(words,q);
                                                        if(negationfound == true){ // determines whether or not the context of the word was negative
                                                          console.log("We've got a negation on our hands");
                                                            if (keyvalue[x] == 'd') {
                                                                    dscore--;
                                                                }
                                                                if (keyvalue[x] == 'r') {
                                                                    rscore--;
                                                                }

                                                        }
                                                        else{

                                                            if (keyvalue[x] == 'd') {
                                                                dscore++;
                                                            }
                                                            if (keyvalue[x] == 'r') {
                                                                rscore++;
                                                            }
                                                        }

                                                        total++;
                                                }
                                        } else { // if there are more spaces
                                                //console.log("next keyword has spaces : " + keywords[x]);

                                                var wOfw = keywords[x].split(" "); //split into an array of words
                                                var len = wOfw.length - 1; //length of the array

                                                var match = true; //if the multiword 100% matches

                                                //check to see if the first word in the multiword matches, see if the rest do
                                                if (wOfw[0] == parsed) {

                                                        for (var y = 1; y < len; ++y) { //go through the multiword
                                                                //if the keyword doesn't match the next word in the article match = false
                                                                if (wOfw[y] != removePunctuation(words[q + y].toLowerCase())) {
                                                                        match = false;
                                                                }
                                                        }

                                                } else { //otherwise it cant match
                                                        match = false;
                                                }

                                                //if its a match we need to add it to either dscore, rscore, or just to the total
                                                if (match) {

                                                        if (keyvalue[x] == 'd') {
                                                                dscore++;
                                                        }
                                                        if (keyvalue[x] == 'r') {
                                                                rscore++;
                                                        }

                                                        total++;
                                                }

                                        }

                                }
                        }
                } catch (err) {
                        //console.log("could not convert part of article");
                }
        }
        console.log("finished finding buzzwords");

        //now we have all of the keywords from the article logged, we can use the
        //values to construct a value
        //calculate: 0 is the middle, -100 is max_dem, 100 is max_repub
        if (total != 0) { //have to check for tricky articles with 0 buzzwords
                var neutral = "Neutral"; // only used when rscore equals dscore
                if(rscore == dscore)
                return neutral; // Decided neutral looked better than a zero value
                var final_score = ((rscore - dscore) / total) * 100;
                console.log(final_score);
                return final_score;

        } else {
                return -999;
        }
}



//var submitButton = document.getElementById("nameButton");
var automaticButton = document.getElementById("autoButton");


function FindAuthor() {
        var output = "not found";
        var words;
        var found = false;
        for (var i = 0; i < art.length; i++) {
                if (found) {
                        break;
                }
                // console.log("secton: " + i);
                try {
                        //console.log(art[i].toString());
                        words = art[i].split(" ");
                        if (words.length >= 3) {
                                for (var q = 0; q < words.length; q++) {
                                        //  console.log(words[q]);
                                        if (words[q].trim() == "By" || words[q].trim() == "by") {
                                                //   console.log("found by");
                                                //   console.log(words.length);
                                                //   console.log(q);
                                                if (!((words.length - 1) == q)) { //!(words.length == (q - 1))
                                                        found = true;
                                                        //  console.log("found the real");
                                                        output = "";
                                                        //console.log(words[q + 1].toString());
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
                        }
                } catch (err) {
                        //console.log("could not convert part of article");
                }
        }
        //console.log("the output is: " + output);
        return output;
}


//when user clicks automatic author analysis button
automaticButton.addEventListener("click", inPageAuthor);

function inPageAuthor() {

        //populate array with current active tab
        chrome.tabs.query({
                "active": true
        }, function(tabs) {
                var currentURL = tabs[0].url; //set as current url of tab

                var rating = 0; // integer level of bias
                var author = "temp"; //author of webpage

                request(currentURL, function(error, response, html) {
                        if (!error && response.statusCode == 200) {
                                //console.log(html);
                                // console.log("running request");
                                var $ = cheerio.load(html);
                                //   console.log("loading");

                                //old way of getting the article
                                /*$("#story, p").each(function (i, elem) {//gets the website and adds the article to the art array;
                                    art.push($(this).text());
                                    console.log($(this).text());
                                    console.log();
                                });*/

                                //new way  of getting the article

                                //   console.log("the article was created by");
                                $("#author creator, p").each(function(i, elem) { //gets the website and adds the article to the art array;
                                        art.push($(this).text());
                                        console.log($(this).text());

                                });

                        } //$("h2, div, p")
                });


                //code to find author of webpage
                console.log("finding the author");
                author = FindAuthor();
                console.log(author);
                var bias = getBais(); //numberical value of bias

                //code to calculate bias of author on webpage

                //link urls to other information about the authors
                var url1;
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
                document.getElementById("resultsHeading").innerHTML = "Results:";
                document.getElementById("authorHeading").innerHTML = "-Author: " + author;
                document.getElementById("biasHeading").innerHTML = "-Bias: " + bias;
                document.getElementById("linksHeading").innerHTML = "-Other Articles by " + author;
                document.getElementById("link1").innerHTML = "Article 1";
                document.getElementById("link2").innerHTML = "Article 2";
                document.getElementById("link3").innerHTML = "Article 3";

        });


}
