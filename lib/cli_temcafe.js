#!/usr/bin/env node
var request = require('request');
var msgs = require('./messages');
var colors = require('colors');

request.get('http://localhost:3000/api/', function (error, response, body) {
  if (error) {
   	console.log( 'Error, please try again  ☕'.red);
   	return;
  }
 
  var level = JSON.parse(body).level;
   console.log(msgs.message(level).yellow);
  
})