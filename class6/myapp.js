// This files contains practice material by me

// class Generate{
//     constructor(name,age){
//         this.userName=name
//         this.userAge=age
//     }
// }
// var g1=new Generate('wajahat',19)
// console.log(g1)

// console.log(this)
// var bar='some text'
// console.log(this.bar)
// console.log(this.g1)

// function foo(){
//     console.log(this)
// }
// foo()


// let a=[1,2,3,5,67,6,5]
// let b='abcdefghijklmnop'
// for(i of a){
//     console.log(i)
// }
// for(i of b){
//     console.log(i)
// }

let date;
let foo=(username="no user")=>{
    console.log(username)
    if(username){
        console.log('work done')
        date=new Date()
        console.log(date)
    }
}
foo('wajahat')

let api='https://jsonplaceholder.typicode.com/photos'
fetch(api)
.then(response=>response.json())
.then(data=>console.log(data))
