// Closures ==> an inner function has access to the outer (enclosing) function's variables

//----------Example 1-----------
var sum=function(a){
    console.log("Hello Wajahat "+a)
    var c=4;
    return function(b){
        // ayesa scope jo is function ko accessible ha wohi ha lexical scope jese c ka or a ka scope lexical ha
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

//-----------Example 2 ---------------

var mult=function(a,b,c){


    return {
        getTwo:function(){
            return a+b
        },
        getThree:function(){
            return a+b+c
        }
    }
}

var store1=mult(1,23,4)
console.log(store1.getTwo())
console.log(store1.getThree())