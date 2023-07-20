/*
$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
    console.log(result)
})

$.get("https://www.googleapis.com/books/v1/volumes?q=intitle:Name of the Wind", function(result){
    console.log(result)
})

const fetch = function () {
  const isbn = $('#isbn').val()
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
      success: function (data) {
          console.log(data.items[0].volumeInfo.authors[0])
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

const fetch1 = function (par1, par2) {

  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${par1}:${par2}`,
      success: function (data) {
        const items =data.items
        for (let item of items)
          console.log(item.volumeInfo.authors[0])
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}


//hOH7dWQStHagLb2TW0YdbMCsqTBTAu1f

//curl --location --max-time 1 --request GET 'https://api.giphy.com/v1 /clips/search?api_key={API_KEY}&q=cats&limit=5'
const div = $("#gif");
const input = $("<input>", { id: "par3", type: "text" });
div.append(input);


const fetch3 = function () {
  const str = input.val()
  div.empty()
  $.ajax({
      method: "GET",
      url:`https://api.giphy.com/v1/gifs/search?api_key=hOH7dWQStHagLb2TW0YdbMCsqTBTAu1f&q=${str}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
      success: function (data) {

      const getUrl = data.data[0].embed_url 
      div.append(`<iframe src=${getUrl}></iframe>`)
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

div.append(`<button id=but>Search</button>`)

const getGif = $(document).on("click", "#but", function() {
  fetch3()
})

*/
/*
const array = []
let j = 0
const numberOfPerson = 5

const callFirst = function(callNum){
  for (let i=0; i<numberOfPerson; i++){

    console.log("before+")
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function(data) {
            console.log(data);
            j++
            const person = {
              name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} `,
              email: `${data.results[0].email}  `
            }
            array.push(person)
            console.log("after+")
            if (j==numberOfPerson){
            callNum()
            }
          }
        });
   
  }
  
}

const callSecond = function(){
  var people = {
    array
  }
  var source = $('#apps').html();
  var template = Handlebars.compile(source);
  var newHTML = template(people);
  $('#peoples').append(newHTML);
  console.log("callback+")
  }


const callThird = function(){
 console.log("callThird")
  }

callFirst(callSecond)
*/

const array = []
let j = 0
const numberOfPerson = 3
let promises =[]

const callFirst = function(){
 
  
  for (let i=0; i<numberOfPerson; i++){
    const pr = new Promise((resolve, reject) => {
    console.log("before+")
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function(data) {
            console.log(data);
            j++
            const person = {
              name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} `,
              email: `${data.results[0].email}  `
            }
            array.push(person)
            console.log("after+")
            resolve((person) => person)
          }
        });
        
   
  })
  pr.then(promises.push(pr))
  
}
  
}

const callSecond = function(){
  var people = {
    array
  }
  var source = $('#apps').html();
  var template = Handlebars.compile(source);
  var newHTML = template(people);
  $('#peoples').append(newHTML);
  console.log("callback+")
  }


const callThird = function(){
 console.log("callThird")
  }

 callFirst()
 Promise.all(promises)
 .then(data => callSecond(data))