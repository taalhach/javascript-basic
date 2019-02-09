var a =['apple','banana','mango','coconut']

//push to end of array
a.push("melon")
console.log(a)

//pops from end
var poped=a.pop()
console.log(a," popped: ",poped)

//shift removes from beginning
a.shift()
console.log(a)

//unshift add at beginning
a.unshift("new fruit")
console.log(a)

//splice( index no START from, no of elements to REMOVE,ELEMENT  )
a.splice(2 ,0,"lemon")
console.log("using splice for adding", a)

//splice for removal
a.splice(3,1)
console.log("using splice for deleting", a)


//slice(start index, ends before)
newAr=a.slice(0,2)
console.log(newAr)

//concat two arrays
b=a.concat(a)
console.log(b)

//calls delicious function for every element of array
a.forEach(delicious)


function delicious(fruit) {
    console.log("i like ",fruit)
}
console.log(delicious.constructor)

