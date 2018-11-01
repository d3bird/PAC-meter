const rp = require('request');
const cheerio = require('cheerio');

var art =[];
var title ="could not find";
var author = "could not find";

var url ='https://www.nytimes.com/2018/10/31/world/middleeast/saudi-arabia-yemen-cease-fire.html?rref=collection%2Fbyline%2Fgardiner-harris&action=click&contentCollection=undefined&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=collection';

function setURL(u){
	url =u;
}

rp(url, function (error, response, html) {
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

function getauthor(){
	return author;
}

function gettitle() {
	return title;
}