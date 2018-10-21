var express = require('express');
var app = express();
const dburi = "mongodb+srv://sateendradey:WordPass1990!@cluster0-wgoht.mongodb.net/test?retryWrites=true";
const MongoClient = require('mongodb').MongoClient;
app.get('/', function (req, res) {
    var result = getProfile("amitr")
    sleep(1000);
    console.log(result);
    res.send(result);   
});
app.listen(3000, function () {
});
function getProfile(user_id) {
    var res;
    MongoClient.connect(dburi, { useNewUrlParser: true }, function(err, client) {
    if(err) {
        console.log('Error occurred while connecting to server...\n',err);
    }
    else {
    var dbo = client.db("User_DB");
    dbo.collection("Details_Cols").findOne({}, function(err, result) {
        if (err) throw err;
            client.close();
        res =  result;
        console.log("1");
        console.log(res);
        });
    }
    });
    sleep(1000);
    sleep(1000);
    console.log("2");
    console.log(res);
    return res;
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}