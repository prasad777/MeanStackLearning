var express = require('express')
var app = express()
// to use the path to various files
var path = require('path');
//to point to the public folder so that index.html can be loaded
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require("body-parser") // to parse the html file
var parseUrlencoded = bodyParser.urlencoded({extend : true});


var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.post('/', function (req, res) {
	console.log("submit button clicked");
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  
   res.send(responseText)
})


app.post('/add',parseUrlencoded, function (req, res) {
  console.log("add button pressed");
 var n1 = parseInt(req.body.num1);
var n2 = parseInt(req.body.num2);
var result= n1+n2;
var str="<h3> Output is "+ result + "</h3>";
 res.send(str);
});

app.post('/subtract',parseUrlencoded, function (req, res) {
  console.log("subtract button pressed");
 var n1 = parseInt(req.body.num1);
var n2 = parseInt(req.body.num2);
var result= n1 - n2;
var str="<h3> Output is "+ result + "</h3>";
 res.send(str);
});

app.post('/divide',parseUrlencoded, function (req, res) {
  console.log("divide button pressed");
 var n1 = parseInt(req.body.num1);
var n2 = parseInt(req.body.num2);
var result= n1 / n2;
var str="<h3> Output is "+ result + "</h3>";
 res.send(str);
});

app.post('/multi',parseUrlencoded, function (req, res) {
  console.log("divide button pressed");
 var n1 = parseInt(req.body.num1);
var n2 = parseInt(req.body.num2);
var result= n1 * n2;
var str="<h3> Output is "+ result + "</h3>";
 res.send(str);
});


app.listen(8080)