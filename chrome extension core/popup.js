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
    //stub for actual method
    alert("automatic author button click detected!");

    //populate array with current active tab
    chrome.tabs.query({"active": true}, function(tabs){
        var currentURL = tabs[0].url; //set as current url of tab
        alert(currentURL + "\n\nThis is a new line");

        var rating; // integer level of bias
        //links of other pages 
        //var link1;
        //var link2;
        //var link3;

        //changing html to results page
    }
);


}
