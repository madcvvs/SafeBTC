var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.sendfile(__dirname + '/views/index.html')
});

app.post("/common/transaction", function(req, res) { 
  console.log('static file request : ' + req.params);
  res.sendfile( __dirname + "/views/transaction.html");
});

app.get("/common/safebtc.css", function(req, res) { 
  res.sendfile( __dirname + "/views/common/safebtc.css");
});

app.post("/common/loading", function(req, res) { 
  console.log('static file request : ' + req.params);
  res.sendfile( __dirname + "/views/loading.html");
});

app.get("/common/transaction", function(req, res) { 
  res.send("403");
});

app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + "/views/common/" + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});