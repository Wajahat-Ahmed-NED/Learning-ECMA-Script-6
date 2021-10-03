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