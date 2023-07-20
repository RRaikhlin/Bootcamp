var items = [
    { item: "cheese", price: 15 },
    { item: "arak", price: 68 },
    { item: "hummus", price: 15 },
    { item: "pita", price: 5 }
  ]
  
  // Write a for loop here that loops through
  // the items array, creates a template for each
  // item, and appends it to the items div.
  // turn our "template" into html

var source = $('#store-template').html();
var template = Handlebars.compile(source);

for (let item of items) {
    var newHTML = template({item: item.item, price: item.price});
    $('.items').append(newHTML);
}


var classData = {
  classmates: [
      {name: "That on gal", description: "Always has the ansswer"},
      {name: "The weird dude", description: "Quick with a smile"},
      {name: "Taylor", description: "Just Taylor"}
  ]
}
var source = $('#menu').html();
var template = Handlebars.compile(source);
var newHTML1 = template(classData);
$('.menu').append(newHTML1);
