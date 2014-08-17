#!/usr/bin/env node
var request = require('request');
var coffee = require('./messages');
var url = 'http://localhost:3000/api/'

require('./options');
require('colors');

request.get( url, function (error, response, body) { 
  if (error) {
    console.error( 'Error, please try again  ☕'.red);
    return;
  } 

  var level = JSON.parse(body).level;
  console.log(coffee.message(level).green);
});

