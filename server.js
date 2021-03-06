var express = require(`express`);
// var path = require(`path`);

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML Routing

//GET ROUTE to `/survey` to display survey.html
app.get(`/survey`, function (req, res) {
    res.sendFile(`${__dirname}/app/public/survey.html`);
});

//Default to /index.html
app.get(`/`, function (req, res) {
    res.sendFile(`${__dirname}/app/public/home.html`);
});

//Friends Array

var friends = require(`./app/data/friends.js`);

//

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});