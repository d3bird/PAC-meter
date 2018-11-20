//author: Joey Cunningham & scott Crawford


const request = require('request');
const cheerio = require('cheerio');

var keywords = ["Abortion",
    "Affirmative Action",
    "Alternative Energy",
    "Armed Teachers",
    "Bitcoin",
    "Border Security",
    "Border Wall",
    "Campaign Finance",
    "Candidate Transparency",
    "Capital Gains Tax",
    "China Tariffs",
    "Citizenship Test",
    "Climate Change",
    "Confederate Flag",
    "Corporate Mega Mergers",
    "Corporate Tax",
    "Criminal Politicians",
    "Cuba",
    "Dakota Access Pipeline",
    "Death Penalty",
    "Deporting Criminal Immigrants",
    "Domestic Jobs",
    "Drones",
    "Drug Policy",
    "Drug Price Regulation",
    "Dual Citizenship",
    "Economic Stimulus",
    "Edward Snowden",
    "Electoral College",
    "Eminent Domain",
    "Equal pay",
    "Estate Tax",
    "Euthanasia",
    "Farm Subsidies",
    "Federal Reserve",
    "First Amendment",
    "Flag Burning",
    "Foreign Aid",
    "Foreign Elections",
    "Foreign Lobbying",
    "Fracking",
    "GMO Labels",
    "Gay Marriage",
    "Gender Identity",
    "Gender Workplace Diversity",
    "Gerrymandering",
    "Government Mandates",
    "Government Pensions",
    "Government Spending",
    "Gun Control",
    "Gun Liability",
    "ISIS",
    "ISIS Ground Troops",
    "Illegal Immigrant Detention",
    "Immigrant Assimilation",
    "Immigrant Children",
    "Immigrant Laborers",
    "Immigration",
    "Immigration Ban",
    "Immigration Healthcare",
    "In-State Tuition",
    "Israel",
    "LGBT",
    "Labor Unions",
    "Lobbyist",
    "Mandatory Military Service",
    "Mandatory Vaccines",
    "Marijuana",
    "Medicaid",
    "Medicaid Work Requirement",
    "Medicare Drug Prices",
    "Mental Health",
    "Military Spending",
    "Minimum Voting Age",
    "Minimum Wage",
    "Muslim Immigrants",
    "Muslim Surveillance",
    "NAFTA",
    "NATO",
    "NSA Domestic Surveillance",
    "NSA Surveillance",
    "Net Neutrality",
    "Niqab",
    "No-Fly List Gun Control",
    "North Korea Military Strikes",
    "Nuclear Energy",
    "Obamacare",
    "Offshore Banking",
    "Oil Drilling",
    "Online Sales Tax",
    "Overtime Pay",
    "Paid Sick Leave",
    "Patriot Act",
    "Pension Reform",
    "Plastic Product Ban",
    "Pre-Existing Conditions",
    "Property Taxes",
    "Religious Freedom Act",
    "Right of Foreigners to Vote",
    "Safe Haven",
    "Safe Spaces",
    "Sanctuary Cities",
    "Single-Payer Healthcare",
    "Skilled Immigrants",
    "Social Media Regulation",
    "Social Security",
    "Space Exploration",
    "Syrian Refugees",
    "Tariffs",
    "Taxes",
    "Term Limits",
    "Terrorism",
    "Torture",
    "Ukraine",
    "United Nations",
    "Universal Basic Income",
    "VA Privatization",
    "Voter Fraud",
    "War on ISIS",
    "Welfare",
    "Welfare Drug Testing",
    "Whistleblower Protection",
    "Women in combat",
    "Yemen"
];

var art =[];

var tempParse;

function removePunctation() {
    var output = tempParse;
    if (tempParse.indexOf(".") == -1) {

    }
    if (tempParse.indexOf(",") == -1) {

    }
    if (tempParse.indexOf("?") == -1) {

    }
    if (tempParse.indexOf("!") == -1) {

    }

    return output;
}

function getBais() {
    var output = 0;// the score
    var words;
    for (var i = 0; i < art.length; i++) {//loops through each readible paragraph
        try {//
            words = art[i].split(" ");
            for (var q = 0; q < words.length; q++) {//loops through each word
                for (var x = 0; x < keywords.length; x++) {//loops through all keywords

                    //check for multiple keywords

                    if (keywords[x].indexOf(" ") == -1) {// if there is no spaces
                        tempParse = words[q].toLowerCase();
                        tempParse = removePunctation();//removes any punctiation from the word in question

                        if (tempParse == keywords[x].toLowerCase()) {// if the word matchs the keyword
                            console.log(words[q].toLowerCase() + " " + keywords[x].toLowerCase());
                            //input the main algorithm here
                            output++;

                        }
                    } else {// if there are more spaces
                        var key = keywords[x].split(" ");
                        var found = false;
                        for (var e = 0; e < key.length; e++) {//checks multiword key words
                            tempParse = words[q + e].toLowerCase();
                            tempParse = removePunctation();//removes any punctiation from the word in question
                            if (tempParse == key[e].toLowerCase()) {

                            } else {
                                break;
                            }
                        }
                    }
                    
                 

                   
                }
            }
        } catch (err) {
            //console.log("could not convert part of article");
        }
    }
   // console.log("number of political words = " + output);
    return output;
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

                        if (!((words.length - 1) == q)) {//!(words.length == (q - 1))
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
function inPageAuthor(){

    //populate array with current active tab
    chrome.tabs.query({"active": true}, function(tabs){
        var currentURL = tabs[0].url; //set as current url of tab
      
        var rating = 0; // integer level of bias
        var author=  "temp"; //author of webpage
       
        request(currentURL, function (error, response, html) {
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
                $("#author creator, p").each(function (i, elem) {//gets the website and adds the article to the art array;
                     art.push($(this).text());
                  //  console.log($(this).text());
                  //  console.log();
                });
               
            }//$("h2, div, p")
        });
       

        //proof of concept code - displays data in a new tab
        //chrome.tabs.create({"active": false, "url": "debug.html"});


        //end proof of concept section


        //code to find author of webpage
        console.log("finding the author");
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
