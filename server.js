require('./views/transaction.js');
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/common/transaction", function (req, res) {
  console.log('static file request : ' + req.params);
  res.sendFile(__dirname + "/views/transaction.html");
});

app.get("/api/address", function (req, res) {
	var address = ["1HvdkYkDhbrh2MDf2PJ53JRDGquYaMYPTG",
				   "1N2tJNBraMixKKYLrwUbw7VpAt5w3QAuA3",
				   "1NDFVdj7LTbQ5jGnzU7GFNtXpsEors7WMc",
				   "1rLaWbWTY25eCWmHat2HRpLE6EiSq7bS7",
				   "1JyeWNBt5Ez2MS13YL8RBK1JDP5ik49g8R"];

	res.send(address[Math.floor(Math.random()*address.length)]);
});

app.get("/common/safebtc.css", function (req, res) {
  res.sendFile(__dirname + "/views/common/safebtc.css");
});

app.post("/common/loading", function (req, res) {
  console.log('static file request : ' + req.params);
  res.sendFile(__dirname + "/views/loading.html");
});

app.get("/common/transaction", function (req, res) {
  waitTransaction();
});

app.get(/^(.+)$/, function (req, res) {
  console.log('static file request : ' + req.params);
  res.sendFile(__dirname + "/views/common/" + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});
