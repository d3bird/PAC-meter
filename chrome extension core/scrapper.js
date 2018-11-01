const rp = require('request');
const cheerio = require('cheerio');

const options = {
  uri: `https://www.nytimes.com/2018/10/31/world/middleeast/saudi-arabia-yemen-cease-fire.html?rref=collection%2Fbyline%2Fgardiner-harris&action=click&contentCollection=undefined&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=collection`,
  transform: function (body) {
    return cheerio.load(body);
  }

};

rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });

function getArticle(){
	
	return "ouput";
}
