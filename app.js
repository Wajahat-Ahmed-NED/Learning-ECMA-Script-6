// var a=10;
// if (true){
//     var a=20;
//     console.log(a)
// }
// console.log(a);

// let b=10;
// if (true){
//     let b=20
//     console.log(b)
// }
// console.log(b)

// var a=10;
// var a='abc';
// console.log(a)


// let b=10;
// let b='abc';
// console.log(b)


// if (true){
//     var a=10;
// }
// console.log(a)
foo()

function foo(){
    console.log("Hello Gullo")
}


// const a=['a','b','c']

// a[3]='d'
// console.log(a)
// // //because data type is not changed 
// // //datatype change hogi to const error dega
// // //pura object replace nahi krny dega uske andr changing krskty ha
// // // q k wo pehle 1st obj ko del krega phir 2nd ko dobara add krega
// const b={
//     name:'wajahat'
// }

// b.lname='ahmed'
// console.log(b)

// const c='abc'
// c='def'//error occured constant cannot reassign


var a='wajahat'
var b=7
var c=4
console.log('My name is '+a+' I am this '+b+' '+c);
console.log(`My name is ${a} and I have ${b*c}`)

// we use template literals instead


//Ternary Operators

var condition=true
if(condition){
    console.log('True Condition')
}
else{
    console.log('False condition')
}


condition?console.log('True'):null;
// isko next line ma break krna is not best practice 
// let a;
let age=10
let b1=age>18?'Nic bangaya':'Nic Nahi bana';






console.log(age)
console.log(b1)