const request = require('request');
const cheerio = require('cheerio');

var art =[];
var title ="could not find";
var author = "could not find";



request('https://www.nytimes.com/2018/10/31/world/middleeast/saudi-arabia-yemen-cease-fire.html?rref=collection%2Fbyline%2Fgardiner-harris&action=click&contentCollection=undefined&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=collection', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    //console.log(html);
    console.log("running request");
 	var $ = cheerio.load(html);
 	console.log("loading");
 	$("h2, div, p").each(function(i, elem){
 		art.push($(this).text());
 		console.log($(this).text());
 	});
    /*$('p.css-1xl4flh e2kc3sl0').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
        });*/
  }//$("h2, div, p")
});

function getauthor(){
	return author;
}

function gettitle() {
	return title;
}