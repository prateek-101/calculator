const express = require('express');
const bodyParser = require('body-parser'); //use to it is necessary to initialize the body parser

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //it is necessary to activate the body parser


app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");  // use to send the file to the desired location after the response
});

app.post('/', function(req, res){

    var num1=Number(req.body.n1);
    var num2= Number(req.body.n2);
    var submit= num1+num2;
    res.send("The output is " + submit + "." );
    // console.log(req.body);  //collect the information given in the form and can be accessed by . (dot operator) followed by the name used in html
    // console.log(req.body.num1); // eg for the above information
});

app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res){
    var height=parseFloat(req.body.h);
    var weight=parseFloat(req.body.w);
    var bmi=weight/height*height;
    res.send("<h1>Your Bmi is "+bmi+"</h1>");
})

app.listen(3000, function(){
    console.log("Server listening on port 3000"); // used to set the current location of the host
});