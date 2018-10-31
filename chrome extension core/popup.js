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
        var output = getArticle();
        var rating; // integer level of bias
        var author; //author of webpage
        author;
        var bias; //numberical value of bias

        //link urls
        var url1; //these should be set to a default page in the future
        var url2;
        var url3;

        //get link urls

        //link elements to other pages
        var link1 = document.getElementById("link1");
        link1.setAttribute('href', url1)
        var link2 = document.getElementById("link2");
        link2.setAttribute('href', url2);
        var link3 = document.getElementById("link3");
        link3.setAttribute('href', url3);

        //changing html to results page
        document.getElementById("resultsHeading").innerHTML="Results:";
        document.getElementById("authorHeading").innerHTML="-Author: " + author;
        document.getElementById("biasHeading").innerHTML="-Bias: " + bias;
        document.getElementById("linksHeading").innerHTML="-Other Articles by " + author;
        document.getElementById("link1").innerHTML="Article 1";
        document.getElementById("link2").innerHTML="Article 2";
        document.getElementById("link3").innerHTML="Article 3";

        document.getElementById("main").style.height = "100px";

    }
);


}
