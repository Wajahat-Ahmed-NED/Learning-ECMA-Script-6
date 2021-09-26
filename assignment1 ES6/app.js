//ES6 Assignment # 1

//========Nested Array Destructing=======
let arr = [2, 3, 5, [33, 55]]
let [a, b, c] = arr
let [, , , [a2, a3]] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(a2)
console.log(a3)


//========Nested Object Destructing========
let obj = {
    name: {
        fname: "wajahat",
        lname: "ahmed"
    },
    age: 23,
    institute: "Adamjee"
}

let { name, age, institute } = obj
let { fname, lname } = name
console.log(name)
console.log(fname)
console.log(lname)
console.log(age)
console.log(institute)


//check properties and values from a object

let obj1 = {
    name: "wajahat",
    age: 19,
    institute: "NED University"
}

let objKeys = Object.keys(obj1)
let objValues = Object.values(obj1)

console.log(objKeys)
console.log(objValues)

let std = [
    {
        name: 'ali',
        class: '1',
        age: 7,
        cnic: "42101-80566579"
    },
    {
        name: 'wajahat',
        class: '1',
        age: 7,
        cnic: "42101-80566579"
    },
    {
        name: 'ali',
        class: '6',
        age: 12,
        cnic: "42101-80566579"
    },
    {
        name: 'waqas',
        class: '4',
        age: 10,
        cnic: "42101-80566579"
    },
    {
        name: 'ali',
        class: '1',
        age: 7,
        cnic: "42101-80566579"
    },
    {
        name: 'wajahat',
        class: '2',
        age: 6,
        cnic: "42101-80566579"
    },
    {
        name: 'waqas',
        class: '1',
        age: 6,
        cnic: "42101-80566579"
    },
    {
        name: 'wajahat',
        class: '1',
        age: 6,
        cnic: "42101-80566579"
    },
    {
        name: 'ali',
        class: '4',
        age: 10,
        cnic: "42101-80566579"
    },

    {
        name: 'ali',
        class: '5',
        age: 10,
        cnic: "42101-80566579"
    }
]

function searched() {
    let searchQuery = document.getElementById("search")
    let val = document.getElementById("searched")
    document.getElementById('ans').innerHTML = ""
    // switch(val.selectedIndex){
    //     case 1 :
    //         console.log("Class 1")
    //         break;
    //     case 2:
    //         console.log("Class 2")
    //         break;
    //     case 3:
    //         console.log("Class 3")
    //         break;
    //     case 4:
    //         console.log("Class 4")
    //         break;
    // }
    document.getElementById('ans1').innerHTML = `<h1>Bio Data of Selected Students <h1>`
    let count = 0
    for (var i = 0; i < std.length; i++) {
        if (std[i].name == searchQuery.value.toLowerCase() && val.selectedIndex === 0) {
            count++
            document.getElementById('ans').innerHTML += `<table class="center">
            <tr>
            <th >Name</th>
            <th >Class</th>
            <th >Age</th>
            <th colspan=2>CNIC</th>
        </tr>
            <tbody>
            <tr>
            <td >${std[i].name}</td>
            <td >${std[i].class}</td>
            <td >${std[i].age}</td>
            <td >${std[i].cnic}</td>
        </tr>
    </tbody>
    </table>`
            // document.getElementById('ans').innerHTML+=``

            console.log(std[i])

        }
        if (std[i].class == val.selectedIndex && searchQuery.value.length == 0) {
            count++;
            document.getElementById('ans').innerHTML += `<table class="center">
            <tr>
            <th >Name</th>
            <th >Class</th>
            <th >Age</th>
            <th colspan=2>CNIC</th>
        </tr>
            <tbody>
            <tr>
            <td >${std[i].name}</td>
            <td >${std[i].class}</td>
            <td >${std[i].age}</td>
            <td >${std[i].cnic}</td>
        </tr>
    </tbody>
    </table>`
            // document.getElementById('ans').innerHTML+=``

            console.log(std[i])

        }
        if (std[i].name == searchQuery.value.toLowerCase() && std[i].class == val.selectedIndex) {
            count++;
            document.getElementById('ans').innerHTML += `<table class="center">
            <tr>
            <th >Name</th>
            <th >Class</th>
            <th >Age</th>
            <th colspan=2>CNIC</th>
        </tr>
            <tbody>
            <tr>
            <td >${std[i].name}</td>
            <td >${std[i].class}</td>
            <td >${std[i].age}</td>
            <td >${std[i].cnic}</td>
        </tr>
    </tbody>
    </table>`
            // document.getElementById('ans').innerHTML+=``
            console.log(std[i])
        }
        else if (count === 0 && i + 1 === std.length) {
            document.getElementById('ans').innerHTML = `<h2> No Data Found </h2>`
        }
    }
}