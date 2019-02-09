var market= {
    pair:"ETH-BTC",
    high:1005,
    low:1001,
    price:1004,
    volume:250.01,
    getDetails:function () {
        return this.pair+" has highest "+this.high+", lowest "+this.low
    }
}
console.log(market.getDetails())

console.log("Method addition")
market.volumeInBTC=function () {
    return this.price*this.volume
}
console.log(market.volumeInBTC())

