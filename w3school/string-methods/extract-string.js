var s="Lastly we all are pawn"

//slice(start, end )  //end is not included
newStr=s.slice(0,4)
console.log(newStr)

//negative starts from end
newStr=s.slice(-5,-1)
console.log(newStr)

//substr() does not except negative index
newStr=s.substr(0,4)
console.log(newStr)

//replace()
newStr=s.replace("pawn","pyaday")
console.log(newStr)


//replace() /word/i case insensitive
newStr=s.replace(/PAWN/i,"pyaday")
console.log(newStr)

//split()
newStr=s.split(" ")
console.log(newStr)
// newStr=s.split("")
// console.log(newStr)




