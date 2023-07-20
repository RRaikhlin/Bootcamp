/*const getRandomWord = function (callback) {
  let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
  setTimeout(() => {
      callback(words[Math.floor(Math.random() * words.length)])
  }, 1000);
}


getRandomWord((randomWord)=> {
  console.log(randomWord);
})
*/

/*
const getRandomWord = function (callback) {
  let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
  setTimeout(() => {
      
      getSynonyms(callback(words[Math.floor(Math.random() * words.length)]), myCallback)
  }, 1000);
}

const getSynonyms = function(word, callback) {
  let thesauraus = {
      'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
      'Astute': ['Sharp', 'Poignant', 'Clever'],
      'Azure': ['Blue', 'Cyan', 'Sky-blue'],
      'Bright': ['Luminous', 'Brilliant'],
      'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
      'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
      'Erode': ['Destroy', 'Wear out', 'Tarnish'],
      'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
      'Phonic': ['Soundful'],
      'Ploy': ['Plan', 'Ruse'],
      'Polaroid': ['Photograph'],
      'Yap': ['Bark', 'Blab', 'Chatter'],
      'Yonder': ['There', 'Away', 'Far', 'Afar']
  }

  setTimeout(()=>{
      callback(thesauraus[word])
  }, 1000)
}

const getSentiment = function(word, callback) {
  let wordSentiment = {
      'Definitive': 1,
      'Sharp': 1,
      'Blue': 0,
      'Luminous': 1,
      'Plethora': 1,
      'Slick': -1,
      'Destroy': -1,
      'Bother': -1,
      'Soundful': 0,
      'Plan': 0,
      'Photograph': 0,
      'Bark': -1,
      'There': -1
  }
  setTimeout(()=>{
      callback(JSON.stringify(wordSentiment[word]))
  }, 1000) 
}

const getSentimentDescription = function(sentiment){
  sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"
}

const myCallback = function(anything){
  return anything  
}
getRandomWord(myCallback)

*/
/*
const randomWord = function () {
  return new Promise((resolve, reject) => {
  $.ajax({
      method: "GET",
      url: `https://random-word-api.herokuapp.com/word`,
      success: function (word) {
       resolve(word)
      },
      error: function (xhr, text, error) {
          console.log(text)
          reject(error)
      }
  })
})
}

const randomBook = function (word) {

  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`,
      success: function (item) {
       console.log(item)
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

randomWord().then(word => randomBook(word))
*/


const randomWord = function () {
  return new Promise((resolve, reject) => {
  $.ajax({
      method: "GET",
      url: `https://random-word-api.herokuapp.com/word`,
      success: function (word) {
       resolve(word)
      },
      error: function (xhr, text, error) {
        reject(error)
      }
  })
})
}


let items;
 const randomGif = function(word) {
  return new Promise((resolve, reject) => {
   
  $.ajax({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=YHkH8Svwjypn4v1pjX5Gv7iqEBWN27mH&q=${word}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
      success: function (item) {
        resolve(item)
        items = item
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
 })  
}

const getGifSuggestion = function(word) {
return $.get(`https://api.giphy.com/v1/tags/related/${word}?api_key=YHkH8Svwjypn4v1pjX5Gv7iqEBWN27mH`)
}

//randomWord().then(word => randomGif(word).then(gif => console.log(gif)))

randomWord().then(word => getGifSuggestion(word).then(gifObj => gifObj.data[0].name)).then(gifWord => randomGif(gifWord)).then(gifobj => gifobj.data[0].embed_url).
then(gifUrl =>addGif(gifUrl) )

addGif = function (gifUrl) {
  const img = $(`<iframe src="${gifUrl}">`)
  const div = $(`#box`)
  div.append(img)
}