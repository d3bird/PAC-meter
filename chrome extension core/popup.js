//author: Joey Cunningham

//var submitButton = document.getElementById("nameButton");
var automaticButton = document.getElementById("autoButton");




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
        alert(currentURL + "\n\nThis is a new line");

       // var output = getArticle();
        var rating; // integer level of bias
        var author; //author of webpage
        author = getArticle();


        //proof of concept code - displays data in a new tab
        chrome.tabs.create({"active": false, "url": "debug.html"});


        //end proof of concept section
        var author; //author of webpage

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
