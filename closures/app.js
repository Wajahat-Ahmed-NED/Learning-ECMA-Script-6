var sum=function(a){
    console.log("Hello Wajahat "+a)
    var c=4;
    return function(b){
        return a+b+c
    }

}
console.log(sum(3)(6))
//this code is same as below code 
// ------------------------------------
var store=sum(4);
// closure ma value retain rhegi lost nahi hogi 
// jesy sum ne return kya anonymous function ab wo store ma save ha
console.log(store(4))
// yaha hamne store ke andr jo function ha usko call kya to wo 
// parent ki value ko access krpa rha ha 
// parent ki value lost nahi horahi