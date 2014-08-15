#!/usr/bin/env node
var request = require('request');
var msgs = require('./messages');

request.get('http://localhost:3000/api/', function (error, response, body) {
  if (response.statusCode == 200) {
  	 var level = JSON.parse(body).level;
     console.log(msgs.message(level));
  }else{
  	console.log('Error, please try again ...')
  }
})