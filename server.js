var express = require(`express`);
// var path = require(`path`);

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML Routing

//GET ROUTE to `/survey` to display survey.html
app.get(`/survey`, function(req, res) {
    res.sendFile(`${__dirname}/app/public/survey.html`);
  });

//Default to /index.html
app.get(`/`, function(req, res) {
    res.sendFile(`${__dirname}/app/public/home.html`);
  });

  




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });