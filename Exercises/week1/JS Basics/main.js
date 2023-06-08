console.log("Hello, world!")
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)


let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a, b, c)


//let username = prompt("What is your username?")

let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if (boughtTesla===true && isUSCitizen===true){
  console.log("How long ago you bought yours Tesla")
}
else if (currentYear-yearOfTeslaPurchase<=4 && isUSCitizen===true && boughtTesla===true ){
    console.log("Would you like an upgrade")
}
else if (currentYear-yearOfTeslaPurchase<=4 && isUSCitizen===true && boughtTesla===true){
    console.log("Whether You are satisfied with the car")
   
} 

if (isUSCitizen===false && boughtTesla===true){
    console.log("Whether the customer would like to move to the US")
}

if (boughtTesla===false){
    console.log("Whether they are interested in buying one")
}


const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2)
numbers[3] = 1
numbers.splice(4,4)
let m = 0
numbers.splice(0,0,m)
console.log(numbers)

let p1 = {
    name: "Jill",
    age: 24,
    city: "London"
}

let p2 = {
    name: "Robert",
    age: 24,
    city: "London"
}

if (p1.age===p2.age && p1.city===p2.city){
    console.log("Jill wanted to date Robert")
}
if (p1.age===p2.age && !p1.city===p2.city){
    console.log("Jill wanted to date Robert, but couldn't")
}

let book1 = {
    title: "title1",
    author: "author1"
}
let book2 = {
    title: "title2",
    author: "author2"
}  

let library = {
    books: [book1, book2]
}

console.log(library)

let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

for(let companyIndex in companies){
    console.log(companies[companyIndex])
  }

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  const person = {
    name: names[i],
    age: ages[i]
  };
  people.push(person);
}

console.log(people);


  for(let pers of people){
    console.log(pers.name +" is " + pers.age + " years old")
  }

 // for(let pers of people){
 //   console.log(pers.name +" is " + pers.age + " years old")
 // }