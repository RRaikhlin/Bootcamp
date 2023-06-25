/*
let users = []


const getData = function (disp) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }];
        console.log("Got users");
        disp(); 
    }, 3000);
};

const displayData = function () {
    console.log("Going to display: " + users);
    for (user of users) {
        console.log(user.name);
    }
};

getData(displayData);



const getFormalTitle = (name1,name2) => name1+ " " +name2
const formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"


const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {

      console.log("You are going to see the name in 3 seconds...")

      setTimeout(() => { //this is the change
          console.log("The name is: " + this.name)
      }, 3000)

  }
}

suspenseBuilder.displayName()
*/
/*

//Ex1
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(push_pull){
  push_pull()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"



//Ex2
const returnTime = function (time) {
//  alert('The current time is: ' + time)
}

const getTime = function (getTime){

  getTime(new Date())
}

getTime(returnTime)

//Ex4
const sum = (x,y,z) => x+y+z
console.log(sum(1,2,3))

//Ex5
const capitalize = s => {
  newS = s.toLowerCase()
  return console.log(newS.charAt(0).toUpperCase() + newS.slice(1))
}

//console.log(s.charAt(0).toUpperCase() + s.slice(1))
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia


//Ex3
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function(data){


}

displayData(alert, logData, "I like to party")


//Ex6
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = (x) => determineWeather(x)
console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"


//Ex7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}
    
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
const makeSound = sound => alert(sound)
    
explode(shineLight, makeSound, "BOOM")


*/

const adds = function adds(number2){
  number2 = number+number2
  return number2
  
  }

const add = function add(number1){
  number = number1
  number2 = adds(number)
  return number2
}



console.log(add(2))
console.log(add(5))