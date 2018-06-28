var mocha = require('mocha');
var expect = require('chai').expect;
var CoinChanger = require('../src/CoinChanger')

describe('CoinChanger', function() {
  var coinChanger = new CoinChanger()
  it('returns 1p for 1', function() {
    expect(coinChanger.returnChange(1)).to.eql(['1p'])
  });

  it('returns 2x2p and 1p for 5p', function() {
    expect(coinChanger.returnChange(5)).to.eql(['2p', '2p', '1p']);
  });
});
