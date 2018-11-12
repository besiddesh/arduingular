var express = require('express');
var app= express();
var io = require('socket.io')(app.listen(4200));
var five = require('johnny-five');


app.use(express.static(__dirname + '/helloworld'));

app.get('/', function (req,res) { 
    res.sendFile(__dirname + '/holamundo.component.html');
});
var placa= new 