//const header = $("#headh1")
/*
$("h4").css("color", "red")

$("h1").append("h4", "dddd")

$("h1").css("color", "red")



$("h1").css("background-color", "blue")
$(".red-div").css("background-color", "red")
$("li:first-child").css("background-color", "green")
$("li:last-child").css("background-color", "pink")
$("#brown-div").css("background-color", "brown")
$("#b1").addClass("box")
$("#b2").addClass("box")

//$('#my-input').val()
//$("#my-input").val("Terabyte")


const data = $("#dat").data()
console.log("data-bar= " + data.barcode) //prints #2980b9

$('.box').on('click', function () {
  alert('clicked!') 
})

$("#b1").hover(function () {
  $(this).css("background-color", "red")
})

$('button').on('click', function () {
  const type = $("#my-input")
  alert(type.val()) 
})

*/
//console.log(header)

/*
$(".box").hover(function(){
  $(this).css("background-color", "green")
})

const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
$("body").append(elem)



$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')
*/

/*
$(".feedme").on("click", function(){
  let divCopy = '<div class=feedme>${$(this).text()}</div>'                            //use template literals and $(this)
  
  $("body").append(divCopy)
})
*/

//const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

//for(let name of names){
//  $("body").append(`<div>${name}</div>`)
//}
/*
const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" }
]

for(let obj of names){
  $("body").append(`<div>${obj.first} last= ${obj.last}</div>`)
}

$("div").remove(".box")
*/
/*
//Ex1 Ex2
$('#btn').on('click', function () {
  const type = $("#text").val()
$("#first").append(`<li class=qwe>${type}</li>`)
})

$("#first").on("click", "li", function() {

  $(this).remove()
});
*/
/*
//Ex3
$("body").append(`<div class=box> <div>`)
$("body").append(`<div class=box> <div>`)
$('.box').on('mouseleave', function () {
 
$(this).css("background-color", "orange")
})
$('.box').on('mouseenter', function () {
 
  $(this).css("background-color", "purple")
  })
  */


 $('.item').on('click', function () {
  const data = $(this).data().instock
  const text = $(this).text()
  if (data!==false){
const check= $('li').is($("li"))

if (!check){
$("#cart").append('<li class=qwe>'+text+'</li>')
  } else {

$('.qwe:contains('+text+')').text("rrrrrrrrr")
  }
  }

})


$("#first").on("click", "li", function() {

  $(this).remove()
});