//GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

$.get("/api/friends", function (req, res) {
    return res.json(friends);
});


//POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    
    var scoreArray = [];

    var newFriend = {
        name: $("#name").val().trim(),
        slack: $("#slack").val().trim(),
        score: scoreArray
    };

    function matchFriend() {
        for (i = 0; i < 10; i++) {
            var answer = parseInt($(`answer${i}`).val());
            scoreArray.push(answer);
        }

        $.post("/api/characters", newFriend)
        .then(function (data) {
            console.log("add.html", data);



            // alert(`Adding ${newCharacter.name}`);
            window.location.href = `/`;
        });
    }

    matchFriend();

});
