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
          let totalDifference = 0;
          for(let j = 0; j<score.length; j++){
              var difference = Math.abs(currentUserScores[j]-score[j]);
              totalDifference = totalDifference + difference;
          }
          storedScores.push(totalDifference);
      }
      var match = indexOfMin(storedScores);
      friends.push(newFriend);
      res.json(friends[match]);
  });
};

