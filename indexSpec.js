var chai = require('chai');
var expect = require('chai').expect;
var word = require('./index.js');

describe('Sanitize', function() {
  beforeEach(function() {
    console.log('Running Test: ');
    afterEach(function() {
      console.log('Done!');
    })
  })
  it('returns lowercase of a string', function() {
    // expect('HELLO WORLD').to.equal('HELLO WORLD');
    var inputWord = 'HELLO WORLD';
    var outputWordFromFunction = word.sanitize(inputWord);

    expect(outputWordFromFunction).to.equal('hello world');
    expect(outputWordFromFunction).to.not.equal('HELLO WORLD');
    expect(outputWordFromFunction).to.be.a('string');
    expect(outputWordFromFunction).to.not.be.a('number');
    expect(outputWordFromFunction).to.contain('hello');
  });

  it('removes any hyphen', function() {
    var inputWord = 'HELLO-WORLD';
    var outputWordFromFunction = word.sanitize(inputWord);

    expect(outputWordFromFunction).to.equal('hello world');
  })
})
