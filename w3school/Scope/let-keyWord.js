
var name ="Block360"
{
    var name ="Orex360"

}
console.log(name) // name is Orex360 inside { } block but overwritten the outer name variable

name ="Block360"
{
    let name="Orex360"
    console.log("inside block let name: ",name)
}
console.log(name) // name is Block360 inside { } block not overwritten the outer name variable


var i=5;
for (var i=5;i>0;i--){
    //decrements
}
console.log("i: ",i," and i was 5 but now is decremented in loop block ") //
var j=5;
for (let j=5;j>0;j--){
    //decrements j of for loop block
}
console.log("j is still: ",j,"not decremented in loop")

console.log("Declaration allowed")
var x =5
var x=6

{
    console.log("Declaration not allowed ")
    let x=5
    // let x=5

}