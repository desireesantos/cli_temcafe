var assert = require("assert")
var coffee = require('../lib/messages');

describe('When does not has cofee', function(){
    it('level is zero', function(){
      	assert.equal(coffee.message('0'), 'No coffee ☕');
    })

    it('level is 1', function(){
      	assert.equal(coffee.message('10'), 'No coffee ☕');
    })
})

describe('When cofee is finishing', function(){
    it('level is 20', function(){
      	assert.equal(coffee.message('20'), 'Run the coffee is finishing ☕');
    })
})

describe('Has coffee', function(){
    it('level is 50', function(){
      	assert.equal(coffee.message('50'), 'Has coffee ☕');
    })
})

describe('When the cofee is fresh', function(){
    it('level is 100', function(){
      	assert.equal(coffee.message('100'), 'Fresh coffee ☕');
    })
})