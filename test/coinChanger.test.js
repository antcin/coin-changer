var mocha = require('mocha');
var expect = require('chai').expect;

describe('CoinChanger', function() {
  it('returns 1p for 1', function() {
    expect(CoinChanger.returnChange(1)).to.eql(['1p'])
  });
});
