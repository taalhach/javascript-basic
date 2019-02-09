var market= {
    pair:"ETH-BTC",
    high:1005,
    low:1001,
    price:1004,
    volume:250.01,
}

//accessing object values
console.log(market.pair,market.high,market.low,market.price,market.volume)
console.log(market["pair"],market["high"],market["low"],market["price"],market["volume"])

//adding mew properties
market.active=true
console.log("Property added: ",market)

// deleting property
delete market.volume
console.log("Property deleted: ",market)
