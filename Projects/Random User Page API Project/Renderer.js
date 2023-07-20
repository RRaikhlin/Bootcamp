
class Renderer {
dataClass

constructor(APIManager, person) {
this.dataClass = APIManager
this.person = person
}

render = function() {
    this.clean()

    this.keyne()
    this.randomPokemon()
    this.foodText()
    this.data()
}

clean = function(){
    const body = $("body")
    body.empty()
    const inside = $(insideBody)
    body.append(inside)
}

data = function() {

    const personData = this.person.personName
    personData.city = this.person.personLocate.city
    personData.state = this.person.personLocate.state
    personData.pictureUrl = this.person.picture

    var source = $('#store-template').html()
    var template = Handlebars.compile(source)
    var newHTML = template(personData)
    $('.user-container').append(newHTML)

    

    var source = $('#store-friends').html()
    var template = Handlebars.compile(source)

    const friends = this.person.friends
    var friendsObj = {
        friends
    }
    var newHTML = template(friendsObj)
    $('.friends-container').append(newHTML)
}


keyne = function() {
    var source = $('#store-keyne').html()
    var template = Handlebars.compile(source)
    var newHTML = template({data: this.person.quote})
    $('.quote-container').append(newHTML)
}

randomPokemon = function() {
    const pokemonName = this.person.pokemon.name
    const sprite = this.person.pokemon.sprite
    var source = $('#store-pokemon').html()
    var template = Handlebars.compile(source)
    var newHTML = template({pokemonName, sprite})
    $('.pokemon-container').append(newHTML)

}



foodText = function() {

    const foodText = this.person.foodText
    var source = $('#store-food').html()
    var template = Handlebars.compile(source)
    var newHTML = template({foodText})
    $('.meat-container').append(newHTML)
}


}

