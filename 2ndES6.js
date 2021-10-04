let foo=function(){
    console.log("Hello World")
}
foo()

let me=()=>{
    console.log("I am arrow function")
}
me()

let m1=name =>{
    console.log(`Its me ${name}`)
}
m1('wajahat')

let m2=(name1,name2)=>{
    console.log(`Hy its me ${name1} and ${name2}`)
}
m2('wajahat','ahmed')

let m3=()=>{
    return "Sir Ghous"
}

console.log(m3())

let m4=()=> "ghous bhai"
console.log(m4())


// this apne parent ko target krega

let m5=()=>{
    console.log(this)
}

m5()

let m6=function (){
    console.log(this)
}

m6()

// Arrow function parent ka this leta ha 
// simple function apna this leta ha


let getOut=(render_data)=>{
    setTimeout(() => {
        render_data("Wajahat")
    }, 3000);

}

let render_data=(data)=>{
    console.log(data)
}

getOut(render_data)

// Array ke functions ko higher order functions bolty han

// Array Functions

let arr=[{name:"wajahat",age:20},{name:"ahmed",age:30}]
//filter function takes another function as an argument

// let filter=arr.filter(function (){
//     return true
// })

let filter=arr.filter(
    (a)=>{
        return a.age<10
    }
)

//return true means will return the whole array
//return false means will return empty array

console.log(filter)


let name="Hammad";
let search="ham"

if(name.toLowerCase().startsWith(search)){
    console.log(name)
}

if(name.toLowerCase().endsWith(search)){
    console.log(name)
}

let arr1=[{name:'ghous'},{name:'basit'}]
let multiply=arr1.map(a=>{
    return a.name='umair'
})
console.log(multiply)


// server database se communicate krne ke liye use hota ha
// fetch method se hm server se connect krty ha in javascript
// server ka bhi apna ip address hota ha jis ko phir domain name dety ha

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// fetch promise return krta ha phir hm promise ko resolve krwaty ha using resolve or reject
// server pr 1 promise banaha jo data bhej rha ha agr hm ko wo mil jata ha to .then ma data ayega warna .catch chaly ga
// free api for testing
// we can short this code by async and await
// server se baat krne ke liye api ka use krty ha api ip address ki tarah hoti ha

async function getData(){
    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // jab tk fetch na hojaye wait kro or next line pr na jao this is asynchronous
    console.log(data)
}


// function Student(name,email){
//     // this is constructor function helps to create object
    // es6 ma is ko banadiya class
//     this.name=name;
//     this.email=email
// }

// let student1=  new Student("wajahat","wajahat@gmail.com")
// console.log(student1)

class Student {
    constructor(name,email){
        this.name=name;
        this.email=email
    }
}

let student1= new Student('ali','ali@gmail.com')

console.log(student1)

class School extends Student{
    constructor(name,email,school){
        super(name,email)
        this.school=school
    }
}

let student2=new School('waji','waji@gmail.com','saims')
console.log(student2)