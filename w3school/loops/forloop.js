var collection =[2,3,4,5,6,1]
var sq=[]
for (i=0;i<collection.length;i++){
    sq.push(collection[i]**2)
}
console.log('using for loop',sq)
sq=[]
for (x in collection){
    sq.push(x**2)
}
console.log('using for/in loop',sq)


console.log("######### do while ###########")
    i=0
do{
    console.log(i)
    i++
    }while (i>10);
