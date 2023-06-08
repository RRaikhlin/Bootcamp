const person = {
    name: "Julius",
    speak: function(food) {
      console.log(`I like ${food}`)
    }
  }

  console.log(person.name) //you know what this will do

//person.speak() //and this? Try it out!

console.log(person.speak("pizza")) //you know what this will do

function isEven(number){
    return (number%2===0)
}
console.log(isEven(4))

//ex2
console.log("\nEx2")

function oddNumbers(numbers){
    for (let number of numbers){
        if (!isEven(number)){
        console.log(number)
        }
    }
}
oddNumbers([0,1,2,3,4,5,6])

//ex3
console.log("\nEx3")

function checkExists(numbers, number){
    for (let num of numbers){
        if (num === number)
        return true
    }
    return false
}

console.log(checkExists([1, 2, 3], 6))


//ex4
console.log("\nEx4")

const calculator = {
    add: function (x, y){
        return x + y
    },
    subtract: function (x, y){
        return x - y
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//ex5
console.log("\nEx5")


const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name) //= function(money, name){
//        return [...name].length*money 
//    }
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

function increaseByNameLength(money, name){
    return [...name].length*money 
}
function makeRegal(name){
    return "His Royal Highness, " + name

}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

//exExtra
console.log("\nExExt")

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = function(string) {
    let arrayOfWords = splitToWords(string);
    let map = addToCount(arrayOfWords);
    printMap(map);
}

function splitToWords(string) {
    return string.split(/[^a-zA-Z]+/)
}

function addToCount(arrayOfWords) {

    count = {
        }

        for (let i of arrayOfWords){
 //           let b = !count.i
            if (!count[i]){
                count[i] = 1
            } else {
                count[i] = count[i] + 1
            }
        }

        return count
}

function printMap(map) {
    for (let key in map ){
        console.log(key + " : " + map[key])
    }
}
const str = "fkfkf fff fffp ffff fff fff fff www www ,  fl fff fee ? fkf"
wordCounts(story)