// step 3

let first: string = "Joel"

//step 4

const states: number = 50

// step 5

let sum: number = 5+4;
console.log(sum)

// step 6

let namecheck = first.charCodeAt(0)

if (first.charCodeAt(0) < 76) {
    alert("Next!");
} else {
    alert("Back of Line");
}

// step 8

function hello(){
    alert("Hello World!")
}

//step 9

hello();

// step 10

function checkAge(name: string, age: number){
    if (age < 21)
        alert("Sorry " + name + ", you aren't old enough to view this page!");
}

// step 11

let josh = {
    name: "Josh",
    age: 25
}

let devin = {
    name: "Devin",
    age: 15
}

let kels = {
    name: "Kelsey",
    age: 20
}

checkAge(devin.name,devin.age)
checkAge(josh.name,josh.age)
checkAge(kels.name,kels.age)

// step 12: veggie array.

let veg = ["Sweet Potato","Green Beans", "Spinach"]

// step 13: loop through veggie array.

for(let i=0; i<veg.length; i++){
    console.log(veg[i]);
}

// step 14 array of 5 friends.

let friends = [
    {
        name: "Jack",
        age: 25
    },
    {
        name: "Thomas",
        age: 17
    },
    {
        name: "Carl",
        age: 22
    },
    {
        name: "Ellie",
        age: 12
    },
    {
        name: "Cotton",
        age: 56
    }
]
// step 15

for(let i=0; i < friends.length; i++){
    checkAge(friends[i].name, friends[i].age);
}

// step 16 getLength Function.

function getLength(str: string){
    return str.length;
}

// step 17 call function

let long = getLength("Hello World!");

// step 18

if (long % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}