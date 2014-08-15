#!/usr/bin/env node
var request = require('request');

request.get('http://localhost:3000/api/', function (error, response, body) {
  if (response.statusCode == 200) {
  	 var coffee = JSON.parse(body);
     console.log(JSON.parse(body).level);
  }else{
  	console.log('Error, please try again ...')
  }
})