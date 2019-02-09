var array = [4,5,6,1,2,3]

//using function
array.sort(function (a,b) { return a-b })
console.log(array)

//object arrays
var objAr=[
    {amount:0.1,p:100,pair:"ETH/BTC",filled:true},
    {amount:0.5,p:90,pair:"ETH/BTC",filled:false},
    {time:0.2,p:115,pair:"ETH/BTC",filled:false} ,
    {time:0.9,p:500,pair:"ETH/BTC",filled:true},
    {time:1,p:10,pair:"ETH/BTC",filled:false},
    {time:0.05,p:103,pair:"ETH/BTC",filled:true}]

objAr.sort(function (a,b) {
    return a.p-b.p
})
console.log(objAr)

//array.map()

newArray=array.map(squareRt)
function squareRt(n) {
    return n**2
}
console.log("newArray map: ",newArray)

//filtered array
filteredArray=objAr.filter(checkFillStatus)
function checkFillStatus (a) {
    console.log(a)
    if( a.filled==true){
        return a
    }
}
console.log("filter method: ",filteredArray)


//foreach
array.forEach(square)
function square(n) {
    console.log( n**2)
}

//