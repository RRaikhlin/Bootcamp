
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render

    var flats = {
        apartments
    }
    var source = $('#apps').html();
    var template = Handlebars.compile(source);
    var newHTML = template(flats);
    $('#results').append(newHTML);
    
    //Your code goes here.
}

renderApts(apartments) //renders apartments when page loads