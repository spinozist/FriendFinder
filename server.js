var express = require(`express`);
// var path = require(`path`);

var app = express();
var PORT = 3000;

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

var friends = [
    {
        name: "Erik",
        slackID: "spinozist",
        scores: ['2', '1', '1', '1', '1', '1', '5', '5', '4', '4']
    },
    {
        name: 'Ms. Neutral',
        slackID: 'vanilla',
        scores: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
    },
    {
        name: 'Mr. Asshole',
        slackID: 'asshole',
        scores: ['5', '1', '5', '5', '5', '5', '1', '1', '1', '1']
    },
    {
        name: 'Mrs. Nice',
        slackID: 'nice-lady',
        scores: ['1', '4', '2', '4', '1', '2', '4', '2', '2', '1']
    },
    {
        name: 'Dr. Whatever',
        slackID: 'whatev-Rx',
        scores: ['4', '2', '3', '4', '3', '2', '1', '1', '1', '4']
    },
    {
        name: 'Trump',
        slackID: 'trumpster-fire',
        scores: ['5', '5', '5', '5', '5', '5', '1', '4', '1', '1']
    },
    {
        name: 'Jim',
        slackID: 'n/a',
        scores: ['5', '1', '1', '1', '2', '1', '1', '1', '3', '4']
    },
    {
        name: 'David',
        slackID: 'n/a',
        scores: ['1', '3', '1', '1', '2', '1', '1', '3', '1', '2']
    },
    {
        name: 'Colby',
        slackID: 'n/a',
        scores: ['1', '3', '2', '2', '1', '1', '5', '3', '2', '2']
    }
];

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