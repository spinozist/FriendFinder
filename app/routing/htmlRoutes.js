var express = require(`express`);
var app = express();


//GET ROUTE to `/survey` to display survey.html
app.get(`/survey`, function(req, res) {
    res.sendFile(`${__dirname}/survey.html`);
  });

//Default to /index.html
app.get(`/`, function(req, res) {
    res.sendFile(`${__dirname}/home.html`);
  });