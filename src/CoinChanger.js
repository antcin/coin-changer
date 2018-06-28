function CoinChanger() {
  this.coins = {
    2: '2p',
    1 : '1p',
  }
}

CoinChanger.prototype.returnChange = function(amount) {
  var change = []

  var amountLeft = amount

  Object.keys(this.coins).reverse().forEach((coin) => {
    // console.log(coin, 'key');
    // console.log(this.coins[coin], 'this.coins[key]]');

    // console.log(Object.values(key), 'coinindex');
    // console.log(Object.keys(key));
    // console.log(array, 'array');
    //   console.log(Object.getOwnPropertyNames(parseInt(array[key])), 'lool')



    while (amountLeft > 0) {
      console.log(amountLeft, 'before while');
      if(amountLeft >= coin){
        console.log(amountLeft, 'amount left at the beginnning of loop');
        // while (coin > amountLeft) {
        amountLeft = amountLeft - coin
        console.log(amountLeft, ' amount left after taking coin away');

        change.push(this.coins[coin])
        console.log(change, 'after pushing amount to change');
      } else {
        break;
      }


    }
  })


  return change
}

module.exports = CoinChanger;
