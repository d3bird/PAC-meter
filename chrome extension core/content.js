/*
console.log("this is temporary code for highlighting keywords on the page");

var numberArray = ["the","and","is","1000","0"];

for(i = 0; i < numberArray.length; i++){
    var replacee = numberArray[i];
    var re = new RegExp(replacee, "g");
    var newSpan = '"<span class="highlight-num">'+numberArray[i]+'</span>"';
    document.body.innerHTML = document.body.innerHTML.replace(re, '"<span class="highlight-num">'+numberArray[i]+'</span>"');
}
/*
numberArray.forEach(changeFunc);

function changeFunc(item){
    //this is the thing to replace  //what to place instead
document.body.innerHTML = document.body.innerHTML.replace(/$(item)/g, '"<span class="highlight-num">'+"vagina"+'</span>"');
}
  // Without knowing exactly what the page looks like I will just show you
  // how to highlight just the numbers in question, but you could easily
  // similarly highlight surrounding text as well
*/


/*
console.log("this is end of content script");
*/
