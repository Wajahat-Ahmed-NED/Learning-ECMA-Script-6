class Generate{
    constructor(name,age){

        // super ()
        this.userName=name;
        this.userAge=age;
        console.log(name,age)
    }
}

var g1= new Generate('ali',23)
console.log(g1)
console.log(this)
var bar="some text"
console.log(this.g1)

// function foo(){
//     console.log(this)
// }
// foo()


let a=[1,2,3,4,5,6,7,8,9,10]
let b='abcdefghijklmnop'
for(i of a){
    console.log(i)
}// only for array
// for in only for Object
for(i of b){
    console.log(i)
}

//=========default values=========
let date;
let foo=(username='no user') =>{
    console.log(username)
    if(username){
        console.log('work done')
        date=new Date()
        console.log(date)
    }

}
// foo()//gives undefined
foo()

let api='https://jsonplaceholder.typicode.com/photos/2'
fetch(api)//ye link api ha database ka link ha
  .then(response => response.json())
  .then(data => console.log(data))
// api ke response ma 1 promise milta ha agr agaya data to .then ma warna .catch ma data milyga
//hr api ma array of objects mily ga
// database se data hmesha json format ma ayega
// framwork ma uske rules pr restricted hote ha, external chezen/ library use nai krskte
//e.g bootstrap is a framework
//library is a freehand to use dosri chezen call krskty han
// e.g is react

// u/i(jo user ne dekha usko dekhny ma acha laga) and u/x(user experience kesa ha)
// ye dono chezen hongi to phir front end developer acha kehlaega
// isse zada achi performance kisi or library ki nahi ha is liye hm react parh rhe han
// react uses virtual DOM
// react js is a single page application(SPA) ha means only 1 page hoga index.html ka
// server side application (SSA)

