//========Nested Array Destructing=======
let arr=[2,3,5,[33,55]]
let [a,b,c]=arr
let [,,,[a2,a3]]=arr
console.log(a)
console.log(b)
console.log(c)
console.log(a2)
console.log(a3)


//========Nested Object Destructing========
let obj={
    name:{
        fname:"wajahat",
        lname:"ahmed"
    },
    age:23,
    institute:"Adamjee"
}

let {name,age,institute}=obj
let {fname,lname}=name
console.log(name)
console.log(fname)
console.log(lname)
console.log(age)
console.log(institute)


//check properties and values from a object

let obj1={
    name:"wajahat",
    age:19,
    institute:"NED University"
}

let objKeys=Object.keys(obj1)
let objValues=Object.values(obj1)

console.log(objKeys)
console.log(objValues)

let std = [
    {
        name: 'Ali',
        class: '1',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Usama',
        class: '1',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Ali',
        class: '6',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Waqas',
        class: '4',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Ali',
        class: '1',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Usama',
        class: '2',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Waqas',
        class: '1',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Usama',
        class: '1',
        age:20,
        cnic:"42101-80566579"
    },
    {
        name: 'Ali',
        class: '4',
        age:20,
        cnic:"42101-80566579"
    },
    
    {
        name: 'Ali',
        class: '4',
        age:20,
        cnic:"42101-80566579"
    }
]

function searched(){
    let val=document.getElementById("searched")
    switch(val.selectedIndex){
        case 1 :
            console.log("Usama Found")
        case 2:
            console.log("Ali Found")
        case 3:
            console.log("Basit Found")
        case 4:
            console.log("Wajahat Found")

    }
   
}