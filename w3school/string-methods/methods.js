var str ="This is a string we will play with it. this is fun"

var intro ="Wow another string"

console.log(str.length)

//indexOf() gives starting index of given value(literal)
console.log(str.indexOf("is "))

//lastIndexOf() gives index of last occurrence
console.log(str.lastIndexOf("is"))

//second argument is index of string where from search get start
console.log(intro.indexOf("is ",15))

//search is same but doesn't accept second starting index
console.log(intro.search("another",5))