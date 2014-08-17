#!/usr/bin/env node
var program = require('commander');
require('colors');

program
  .version('0.1.2')
  .option('-m, --messages', 'Output possible messages')
  .parse(process.argv);

if (program.messages) {
	 console.log('Messages: No coffee, Run the coffee is finishing, Has coffee, Fresh coffee'.yellow);
   process.exit(1);
}
