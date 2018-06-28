function CoinChanger() {
  this.coins = {
    200: '£2',
    100: '£1',
    50: '50p',
    20: '20p',
    10: '10p',
    5: '5p',
    2: '2p',
    1 : '1p'
  };
}

CoinChanger.prototype.returnChange = function(amount) {
  var change = [];

  var amountLeft = amount;

  Object.keys(this.coins).reverse().forEach((coin) => {
    while(amountLeft >= coin && amountLeft > 0){
      amountLeft = amountLeft - coin
      change.push(this.coins[coin])
    }
  })
  return change
}

module.exports = CoinChanger;
