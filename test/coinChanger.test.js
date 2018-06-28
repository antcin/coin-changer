var mocha = require('mocha');
var expect = require('chai').expect;
var CoinChanger = require('../src/CoinChanger')

describe('CoinChanger', function() {
  var coinChanger = new CoinChanger()
  it('returns 1p for 1', function() {
    expect(coinChanger.returnChange(1)).to.eql(['1p'])
  });

  it('returns 5p for 5p', function() {
    expect(coinChanger.returnChange(5)).to.eql(['5p']);
  });

  it('returns 10p for 10p', function() {
    expect(coinChanger.returnChange(10)).to.eql(['10p'])
  });

  it('returns 20p for 20p', function() {
    expect(coinChanger.returnChange(20)).to.eql(['20p'])
  });

  it('returns 50p for 50p', function() {
    expect(coinChanger.returnChange(50)).to.eql(['50p'])
  });

  it('returns 20p, 10p, 5p, 2p, 2p for 39p', function() {
    expect(coinChanger.returnChange(39)).to.eql(['20p', '10p', '5p', '2p', '2p'])
  });

  it('returns £1 for £1', function() {
    expect(coinChanger.returnChange(100)).to.eql(['£1'])
  });

  it('returns £2 for £2', function() {
    expect(coinChanger.returnChange(200)).to.eql(['£2'])
  });

  it('returns £2, £2, £2, £1, 20p, 10p, 5p, 2p, 1p, for £7.38', function() {
    expect(coinChanger.returnChange(738)).to.eql(['£2', "£2", "£2", "£1", "20p", "10p", "5p", "2p", "1p"])
  });
});
