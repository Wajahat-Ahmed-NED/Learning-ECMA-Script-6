
//=========Sir Code Starts==============

// let arr = [1,2,3,4]

// function avg(a1,a2,a3){
//     let a = (a1 + a2 + a3)/3
//     return a 
// }

// let result = avg(...arr)
// console.log(result)


// let arr3 = [...arr2,...arr2]

// Spread Operators
// let obj = {
//     name:'ali',
//     inst: 'saims',
//     favLang:'JavaScript'
// }

// let obj2 = {...obj,favLang:'Python'}
// console.log(obj2)
// console.log(obj)


// Object Destructring and Array Destructuring

// const obj = {
//     name:'ali',
//     inst: 'saims',
//     favLang:'JavaScript'
// }

// obj.name

// let name = obj.name
// let inst = obj.inst
// let favLang = obj.favLang
// let {name,inst,favLang} = obj
// console.log(name)

// // Array Destructuring

// let arr = [1,2,3,4]
// // let arr2 = [2,3,4,5]
// let [usa,arg,ys,a4] = arr

// console.log(...)

// let obj = {
//     name:'Ali',
//     age:18
// }

// let {name,age} = obj
// name = 'Basit'
// console.log(name,age)
// console.log(obj)


// const a = 'abc'
// b = 'xyz'
// a = b

// console.log(a)


// let a = 'another text'

// if(true){
//     let a = 'some text'
//     console.log(a)
// }


// let a =  ['a','b','c',[1,2,3]] 

// let [,,,[subInd1,subInd2]] = a

// console.log(subInd1)


// let arr = [1,2,3]
// let [a1,a2,a3] = arr

// let obj = {
//     a1,
//     a2,
//     a3
// }

// console.log(obj)

// Array Methods
// map

// function a(...rest){
//     let arr = rest 
//     arr.map(function(item,index){
//         console.log(item.name + index)
//     })
// }

// a({name:'Ali'},{name:'Usama'},{name:'Waqas'},{name:'Basit'})
// let ul = document.getElementById('ul')
// let arr = ['ali','basit','usama','Zaid','Haris']


let std = [
    {
        name: 'Ali',
        class: '1'
    },
    {
        name: 'Usama',
        class: '1'
    },
    {
        name: 'Ali',
        class: '6'
    },
    {
        name: 'Waqas',
        class: '4'
    },
    {
        name: 'Ali',
        class: '1'
    },
    {
        name: 'Usama',
        class: '2'
    },
    {
        name: 'Waqas',
        class: '1'
    },
    {
        name: 'Usama',
        class: '1'
    },
    {
        name: 'Ali',
        class: '4'
    },
]


// arr.map(function(item){
//     console.log(item)
//     ul.innerHTML += `<li>${item}</li>` 
// })

// arr.forEach(function(x){
//     console.log(x)
// })

// let newArr = arr.filter(function(y){
//     return y == 'usama'
// })

// console.log(newArr)
// let arr = [1,2,3,1,2,]
// let x = prompt()
// console.log(arr[+x])



// function searc(searchValue,searchby){   
//     let arr = std.filter(function(x){
//         return x[searchby] == searchValue
//     })
//     console.log(arr)
// }

// searc('1','class')


//==========Sir Code Ends===========



// let arr=[1,3,5,3]
// function avg(a1,a2,a3){
//     let a=(a1+a3+a2)/3
//     return a;
// }
// let result = avg(...arr)
// console.log(result)

// let arr3 = [...arr2,...arr2]
// let arr2=[3,5,3,6,9]
// let arr3=[...arr2,...arr2]
// console.log(arr3)

// Spread Operators
// let obj = {
//     name:'ali',
//     inst: 'saims',
//     favLang:'JavaScript'
// }

// let obj2 = {...obj,favLang:'Python'}
// console.log(obj2)
// console.log(obj)

// const obj = {
//     name:'ali',
//     inst: 'saims',
//     favLang:'JavaScript'
// }

// obj.name

// let name = obj.name
// let inst = obj.inst
// let favLang = obj.favLang
// let {name,inst,favLang} = obj
// console.log(name)

// const obj={
//     name:'ali',
//     inst:'saims',
//     favlang:'JS'
// }
// console.log(obj.name)
// // let name=obj.name;
// // let inst=obj.inst;
// // let favlang=obj.favlang
// let {name,inst,favlang}=obj;
// console.log(inst)

// Array Destructuring

// let arr = [1,2,3,4]
// // let arr2 = [2,3,4,5]
// let [usa,arg,ys,a4] = arr

// console.log(...arr)




// let obj = {
//     name:'Ali',
//     age:18
// }

// let {name,age} = obj
// name = 'Basit'
// console.log(name,age)
// console.log(obj)

// let obj={
//     name:'Wajahat',
//     age:12
// }

// let {name,age}=obj
// console.log(name,age)
// name='ahmed'
// console.log(name,age)
// console.log(obj)


// const a = 'abc'
// b = 'xyz'
// a = b//throw an error

// console.log(a)

// let a = 'another text'

// if(true){
//     let a = 'some text'
//     console.log(a)
// }
// console.log(a)


// let a =  ['a','b','c',[1,2,3]] 

// let [,,,[subInd1,subInd2]] = a

// console.log(subInd1)


// let arr = [1,2,3]
// let [a1,a2,a3] = arr

// let obj = {
//     a1,
//     a2,
//     a3
// }

// console.log(obj)

// let arr=[3,5,67]
// let [a,b,c]=arr
// let name='ne'
// let obj={
//     a,b,c,name
// }
// console.log(obj)

// Array Methods
// map

// function a(...rest){
//     let arr = rest 
//     arr.map(function(item,index){
//         console.log(item.name + index)
//     })
// }

// a({name:'Ali'},{name:'Usama'},{name:'Waqas'},{name:'Basit'})


// function b(...rest){
//     let arr=rest
//     arr.map(function (item,index){
//         console.log(item,index)
//     })
// }
// b(1,2,4)

// let c=[2,4,6]
// console.log(...c)


// let ul = document.getElementById('ul')
let arr = ['ali', 'usama', 'usama', 'Zaid', 'Haris']


// let arr = ['ali','basit','usama','Zaid','Haris']

// arr.map(function(item){
//     console.log(item)
//     ul.innerHTML += `<li>${item}</li>` 
// })

// let ul1=document.getElementById('ul')
// let arr1=["ali","laskdf","lsadkfjla","jsjgh","sldfe"]

// arr1.map(function(item){
//     console.log(item)


//     ul1.innerHTML+=`<li>${item}</li>`
// })

arr.forEach(function (x) {
    console.log(x)
})


// let newArr = arr.filter(function(y){
//     return y == 'usama'
// })

// console.log(newArr)


// let arr1 = [1,2,3,1,2,]
// let x = prompt()
// console.log(arr1[+x])//Ask from sir
// console.log(arr1)



// function searc(searchValue,searchby){   
//     let arr = std.filter(function(x){
//         return x[searchby] == searchValue
//     })
//     console.log(arr)
// }

// searc('1','class')


// function search1(searchValue, searchBy) {
//     let arr = std.filter(function (x) {
//         return x[searchBy] == searchValue;//array ke andr jis object ke 
//         // andr ye condition true horahi ha us object ko array ma 
//         // daldega or phir jo objects us condition ko follow krrhe hongy 
//         // unki array ajaegi is tarah pehli wali array filter hogi
//     })
//     console.log(arr)
// }
// search1(1, "class")


// // ==== array destructing practice ======
// let me=['python','js','c++','csharp']

// let [top1,top2,top3]=me
// console.log(`this is given ${top1},,,,${top2},,,,,,${top3}`)

// let [tops,,,topl]=me
// console.log(`This is given ${tops} and  ${topl}`)


// let a=10;b=23;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)


// const bioData={
//     name:'wajahat',
//     age:213,
//     deg:'BE Software Engineering',
//     hobb:{
//         fgame:'hockey',
//         sgame:'youtube videos'
//     }
// }

// let {name:fname,age:myage,deg:mydeg,hobb}=bioData
// let {fgame,sgame}=bioData.hobb
// console.log(`Ye ma ho ${fname}`)
// console.log(`Ye meri age ha ${myage}`)
// console.log(`Ye meri degree ha ${mydeg}`)
// console.log(`Ye meri degree ha ${hobb.sgame}`)
// console.log(`Ye meri degree ha ${sgame}`)
// console.log(`Ye meri degree ha ${fgame}`)


// function sum(a,b,c){
//     console.log(a+b+c)
// }
// waj=[1,2,3,4]
// sum(...waj)

// let ali=[23,5,4,3]

// waj=[...waj,...ali]
// console.log(waj)


// let arr1=[1,2,3]
// let arr2=arr1
// arr2.push(5,8)
// console.log(arr2)
// console.log(arr1)


// let arr1=[3,4,65]
// let arr2=[...arr1]
// arr2.push(2,2,3)
// console.log(arr1)
// console.log(arr2)


// let bool=false
// let first=bool && 'Ghouse'//ye bhi ternary operator ha
// console.log(first)

