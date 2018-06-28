function CoinChanger() {
  this.coins = {1 : '1p'}
}

CoinChanger.prototype.returnChange = function(amount) {
  var change = []
  if (this.coins.hasOwnProperty(amount)) {
    change.push(this.coins[amount])
  }
  return change
}

module.exports = CoinChanger;
