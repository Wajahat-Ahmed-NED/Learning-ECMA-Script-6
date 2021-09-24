//===============Sir Code Starts============

//==========var===============
//block scope (n) 
//redeclareable (y)
//reassignable (y)
//hoist (y)

//==========let===============
//block scope (y) 
//redeclareable (n)
//reassignable (y)
//hoist (n)

//=========const===============
//block scope (y) 
//redeclareable (n)
//reassignable (n)
//hoist (n)


// Template Literals

// let b = document.getElementById('main')
// let a = 30
// let text = 'Main Heading Text'
// console.log('the square of '+a+ ' is '+ ' '+ a*a)
// b.innerHTML = `<h1 style='color:blue'> ${text}  sagd jfgsjfg</h1>`


// Ternary Operator
// if (false) {
//     console.log('True Condition')
// }

// true ? console.log('true condition') : null



// let age = 22
// let ageStatus
// ageStatus = age > 18 ? true : false
// let address = 'okas'

// b.innerHTML = `you can visit at our office location:${address == 'karachi'?'Karachi Office':address == 'islamabad'?'Islamabad Office':'Faisalabad Office'}`





// Spread operators

// let arr1 = ['a','b','c','d','e']
// let arr2 = ['f','g','h','i','j']

// let arr3 = [...arr1,...arr2]
// arr3[1] = 5

// console.log(arr3)
// console.log(arr1)
// console.log(arr2)



// let obj = {
//     name:'Ali',
//     age :'18'
// }
// obj['inst'] = 'SAIMS'

// let obj2 = {
//     ...obj,
//     institute:'SAIMS'
// }
// console.log(obj)
// console.log(obj2)


// lexical scoping

//===============Sir Code Ends============


let l1=[2,54,6,43]
let l2=[21,4,63,3]

// l1[2]=322
let l3=[...l1,...l2];
l1[2]=322

console.log(l1)
console.log(l2)
console.log(l3)

let obj1={
    name:'wajahat',
    age:12,
    institute:'NED University'
}

let obj2={
    ...obj1
}
console.log(obj1)
console.log(obj2)
obj2.institute='SAIMS'
obj2['name']='ahmed'
console.log(obj2)

