//author: Joey Cunningham & scott Crawford


const request = require('request');
const cheerio = require('cheerio');

var keywords = ["Abortion", //d
        "Affirmative Action", //d
        "Alternative Energy",
        "Armed Teachers",//r
        "Bitcoin",
        "Border Security",//r
        "Border Wall",//r
        "Campaign Finance",
        "Candidate Transparency",
      "Capital Gains Tax", //d
        "China Tariffs", //r
        "Citizenship Test",
        "Climate Change", //d
        "Confederate Flag", //r
        "Corporate Mega Mergers",
        "Corporate Tax", //d
        "Criminal Politicians",
        "Cuba",
       "Dakota Access Pipeline", //r
      "Death Penalty", //r
        "Deportation", //r
       "Deporting Criminal Immigrants", //r
        "Domestic Jobs", //r
        "Drones",
        "Drug Policy",
        "Drug Price Regulation",
        "Dual Citizenship",
        "Economic Stimulus", //d
        "Edward Snowden",
        "Electoral College",
        "Eminent Domain",
      "Equal pay", //d
      "Estate Tax", //d
        "Euthanasia",
       "Farm Subsidies", //r
        "Federal Reserve",
        "First Amendment",
        "Flag Burning",
      "Foreign Aid",// d
        "Foreign Elections",
        "Foreign Lobbying",
        "Fracking", //r
     "GMO Labels", //r
       "Gay Marriage", //d
      "Gender Identity", // d
     "Gender Workplace Diversity", //d
     "Gerrymandering", //d
        "Government Mandates",
        "Government Pensions",
       "Government Spending", //r
     "Gun Control", //d
        "Gun Liability", //d
       "ISIS", //r
      "ISIS Ground Troops", //r
       "Illegal Immigrant Detention",//r
      "Immigrant Assimilation", //d
      "Immigrant Children", //d
      "Immigrant Laborers", //d
        "Immigration", //r
      "Immigration Ban", //r
       "Immigration Healthcare", //d
        "In-State Tuition",
       "Israel", //r
        "LGBT", //d
       "Labor Unions", //d
        "Lobbyist",
        "Mandatory Military Service",
        "Mandatory Vaccines",
       "Marijuana", //d
      "Medicaid", //d
      "Medicaid Work Requirement", //r
        "Medicare Drug Prices",
        "Mental Health",
      "Military Spending", //d
       "Minimum Voting Age",
      "Minimum Wage", //d
       "Muslim Immigrants", //r
       "Muslim Surveillance", //r
        "NAFTA",
        "NATO",
        "NSA Domestic Surveillance", //r
        "NSA Surveillance", //r
      "Net Neutrality", //d
      "Niqab", //d
       "No-Fly List Gun Control", //d
       "North Korea Military Strikes", //r
        "Nuclear Energy",
       "Obamacare", //d
        "Offshore Banking",
       "Oil Drilling",// r
        "Online Sales Tax",
        "Overtime Pay",
        "Paid Sick Leave",
        "Patriot Act",
        "Pension Reform",
        "Plastic Product Ban",
        "Pre-Existing Conditions",
       "Pro-life", //r
       "pro life", //r
       "Property Taxes",
       "Religious Freedom Act", //d
        "Right of Foreigners to Vote", //d
       "Safe Haven", //d
      "Safe Spaces", //d
      "Sanctuary Cities", //d
        "Single-Payer Healthcare", 
        "Skilled Immigrants",
       "Social Media Regulation", //r
        "Social Security",
        "Space Exploration",
        "Syrian Refugees",
      "Tariffs", //r
      "Taxes", ///r
        "Term Limits",
        "Terrorism",
        "Torture",
        "Ukraine",
        "United Nations",
        "Universal Basic Income",
        "VA Privatization",
        "Voter Fraud",
       "War on ISIS", //r
       "Welfare", //d
       "Welfare Drug Testing", //r
        "Whistleblower Protection",
       "Women in combat", //d
        "Yemen"
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

//removed dwords from the keyword
var dwords = ["Abortion",
        "Affirmative Action",
        "Capital Gains Tax",
        "Climate Change",
        "Corporate Tax",
        "Economic Stimulus",
        "Equal pay",
        "Estate Tax",
        "Foreign Aid",
        "Gay Marriage",
        "Gender Identity",
        "Gender Workplace Diversity",
        "Gerrymandering",
        "Gun Control",
        "Gun Liability",
        "Immigrant Children",
        "Immigrant Laborers",
        "Immigration Healthcare",
        "LGBT",
        "Labor Unions",
        "Marijuana",
        "Medicaid",
        "Military Spending",
        "Minimum Wage",
        "Net Neutrality",
        "Niqab",
        "No-Fly List Gun Control",
        "Obamacare",
        "Religious Freedom Act",
        "Right of Foreigners to Vote",
        "Safe Haven",
        "Safe Spaces",
        "Sanctuary Cities",
        "Welfare",
        "Women in combat",
];
// removed rwords from keywords
var rwords = ["Armed Teachers",
        "Border Security",
        "Border Wall",//
        "China Tariffs",//
        "Confederate Flag",//
        "Dakota Access Pipeline",
        "Death Penalty",//
        "Deportation",//
        "Deporting Criminal Immigrants",//
        "Domestic Jobs",//
        "Farm Subsidies",
        "First Amendment",//
        "Fracking",//
        "GMO Labels",//
        "Government Spending",//
        "ISIS",//
        "ISIS Ground Troops",//
        "Illegal Immigrant Detention",//
        "Immigrant Assimilation",///
        "Immigration Ban",//
        "Israel",//
        "Medicaid Work Requirement",//
        "Muslim Immigrants",
        "Muslim Surveillance",//
        "NSA Surveillance", //
        "North Korea Military Strikes",//
        "Oil Drilling",//
        "Patriot Act",
        "Pro-life",//
        "Social Media Regulation",//
        "Tariffs",//
        "War on ISIS",//
        "Welfare Drug Testing",//
];

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

function removePunctuation(word) {

        var n = word.length - 1; //only checking for punctuation at the end of the word

        //common punctuation
        if (word[n] == '.' || word[n] == '?' || word[n] == ',' || word[n] == '!') {
                word = word.substr(0, n - 1); //parse the last character off
        }

        return word; //return the word

}

var art = [];



function getBais() {
        var total = 0; // the score
        var rscore = 0; // republican score
        var dscore = 0; // democrat score

        var words;
        var tempParse;
        console.log("searching for pollitical buzz words");

        for (var i = 0; i < (art.length - 1); i++) { //loops through each readible paragraph
                try {
                        words = art[i].split(" ");

                        for (var q = 0; q < (words.length - 1); q++) { //loops through each word
                                //make sure the word is lowercase
                                tempParse = words[q].toLowerCase();

                                //removes any punctiation from the word in question (implemented)
                                tempParse = removePunctuation(tempParse);

                                for (var x = 0; x < (keywords.length - 1); x++) { //loops through all keywords

                                        if (keywords[x].indexOf(" ") == -1) { // if there is no spaces

                                                if (tempParse == keywords[x].toLowerCase()) { // if the word matchs the keyword
                                                        console.log(words[q].toLowerCase());

                                                        //going to use an if statment to save a search if we find a dword
                                                        var temp = dscore;

                                                        for (var z = 0; z < (dwords.length - 1); ++z) {
                                                                if (tempParse == dwords[z].toLowerCase()) { //seeing if the keyword is a dem word
                                                                        dscore++; //increase our democrat score
                                                                }
                                                        }
                                                        //skip if it was found in the dem list ie. dscore > temp
                                                        if (temp == dscore) {
                                                                for (var z = 0; z < (rwords.length - 1); ++z) {
                                                                        if (tempParse == rwords[z].toLowerCase()) {
                                                                                rscore++; //increase our republican score
                                                                        }
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
                                                if (wOfw[0].toLowerCase() == tempParse) {

                                                        for (var y = 1; y < len; ++y) { //go through the multiword
                                                                //if the keyword doesn't match the next word in the article match = false
                                                                if (wOfw[y].toLowerCase() != removePunctuation(words[q + y].toLowerCase())) {
                                                                        match = false;
                                                                }
                                                        }

                                                } else { //otherwise it cant match
                                                        match = false;
                                                }

                                                //if its a match we need to add it to either dscore, rscore, or just to the total
                                                if (match) {
                                                        var temp = dscore; //same as the single case at this point

                                                        for (var z = 0; z < (dwords.length - 1); ++z) {
                                                                if (words[x] == dwords[z].toLowerCase()) { //seeing if the keyword is a dem word
                                                                        dscore++; //increase our democrat score
                                                                }
                                                        }

                                                        if (temp == dscore) {
                                                                for (var z = 0; z < (rwords.length - 1); ++z) {
                                                                        if (words[x] == rwords[z].toLowerCase()) {
                                                                                rscore++; //increase our republican score
                                                                        }
                                                                }
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
        console.log("finnished finding buzzwords");

        //now we have all of the keywords from the article logged, we can use the
        //values to construct a value
        //calculate: 0 is the middle, -100 is max_dem, 100 is max_repub
        if (total != 0) { //have to check for tricky articles with 0 buzzwords
                var final_score = ((rscore - dscore) / total) * 100;

                return final_score;

        } else {
                return 0;
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