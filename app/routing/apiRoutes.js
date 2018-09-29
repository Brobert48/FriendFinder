var friends = require("../data/friends");
function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var min = arr[0];
    var minIndex = 5;
    for (var i = 1; i < arr.length; i++) {
        console.log
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    console.log("Min: "+ min)
    }
    return minIndex;
};
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      var currentUserScores = req.body.scores;
      var storedScores = [];
      console.log("friends: " +friends);
      for(let i = 0; i < friends.length; i++){
          var score = friends[i].scores;
          console.log("score: "+ score);
          console.log("StoredScores: "+ storedScores);
          var totalDifference;
          for(let j = 0; j<score.length; j++){
              var difference = Math.abs(currentUserScores[j]-score[j]);
          console.log("totalDifference1: "+totalDifference);
              totalDifference = totalDifference + difference;
          console.log("totalDifference2: "+totalDifference);

              console.log("difference: "+ difference);
          }
          console.log("totalDifference: "+totalDifference);

          storedScores.push(totalDifference);
          console.log("StoredScores2: "+ storedScores)
      }
      var match = indexOfMin(storedScores);
      console.log("Match: "+ match);
      res.json(friends[match]);
  });
};

