var mocha = require('mocha');
var expect = require('chai').expect;
var CoinChanger = require('../src/CoinChanger')

describe('CoinChanger', function() {
  console.log( CoinChanger)
  var coinChanger = new CoinChanger()
  it('returns 1p for 1', function() {
    expect(coinChanger.returnChange(1)).to.eql(['1p'])
  });
});
