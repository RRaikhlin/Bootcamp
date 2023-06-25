/*

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

*/

/*
const foo = function () {
  const x = 1

  const bar = function () {
    console.log(x) //notice this inner function using the outer function's variable
  }

  return bar
}


const baz = foo() //out here, x doesn't exist
baz() //but when we invoke baz, we're printing x!
*/
const setCounter = function (num) {
  let counter = 0
  console.log(counter)

  const count = function () {
    counter += num;
    console.log(counter)
  }

  return count
}

const increment = setCounter(2)
increment()
const inc = setCounter(3)
setCounter(3)


/*
const setCounter = function (num) {
  let counter = 0

 
    counter += num;
    console.log(counter)
  

  return counter
}

const increment = setCounter(2)
increment()
increment()
const inc = setCounter(3)
setCounter(3)
*/

//Ex1
/*
const StringFormatter = function(string) {

  const capitalizeFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const toSkewerCase = function(string){
    return string.replace(/\s+/g, "-")
  }

 return {
  capitalizeFirst : capitalizeFirst,
  toSkewerCase : toSkewerCase
 }

}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box

//ex2
const Bank = function() {
  let money = 500
  const deposit = function(money1) {
    money += money1 
  }

  const showBalance = function() {
    return money
  }

return {
  deposit : deposit,
  showBalance : showBalance
}
}

const bank = Bank()
console.log(bank.deposit(200))
console.log(bank.deposit(250))
console.log(bank.showBalance()) //should print 950
*/


//Ex3
const SongsManager = function(name1, str) {
 

  let songs =[] 
 

const addSong = function (song, adress) {
  let son ={
      named : name1,
     adressed : str
  }

  son.named = song
  son.adressed=adress
  songs.push(son)
}

const getSong = function(string){
  
  return songs.filter(s => s.named === string )
}

return {
  addSong : addSong,
  getSong : getSong
}

}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ