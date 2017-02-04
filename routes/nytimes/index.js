var router = require('express').Router();
var request = require('request');

router.get('/', function (req, res) {
  request.get({url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
      'api-key': "c6dfd1ddeb3e4b9aabe215e573c1629b",
      'q': "trump immigration",
      'begin_date': "20170201",
      'fl': "snippet"
    },
  }, function(err, response, body) {
        updatedProperty = [];
        if (err) return console.log('Cannot Connect to NYtimes server');
        else {
        body = JSON.parse(response.body);
        snippet = body.response.docs;
        for (var i = 0; i < snippet.length; i++) {
          console.log('\n' + 'News' + i + '\n');
          snippet[i].id = i+1;
          updatedProperty.push(snippet[i]);

        }
        console.log(updatedProperty);
        res.status(200).json(updatedProperty);
      }});


});

module.exports = router;
