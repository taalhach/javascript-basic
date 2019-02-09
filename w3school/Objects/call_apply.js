var candleData={
    pair:"ETH-BTC",
    o:102,
    h:105,
    l:101,
    c:104,
    v:10,
}

var market= {
    pair:"ETH-BTC",
    high:1005,
    low:1001,
    price:1004,
    volume:250.01,
    volumeInBTC:function (price,volume) {
        return price*volume
    }
}

console.log("calculate candleData volume in BTC")
console.log("using call(): ",market.volumeInBTC.call(candleData,candleData.c,candleData.v))
console.log("using apply(): ",market.volumeInBTC.apply(candleData,[candleData.c,candleData.v]))