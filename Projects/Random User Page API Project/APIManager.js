//This is the class that will manage all your APIs

class APIManager {

    constructor(person) {
        this.p1 = person
    }

 
 
getData = async function(){
    let dataPerson = await $.get(url1)

    this.p1.personName.title = dataPerson.results[0].name.title
    this.p1.personName.title = dataPerson.results[0].name.title
    this.p1.personName.first = dataPerson.results[0].name.first
    this.p1.personName.last = dataPerson.results[0].name.last
    this.p1.personLocate.city = dataPerson.results[0].location.city
    this.p1.personLocate.state = dataPerson.results[0].location.state
    this.p1.picture = dataPerson.results[0].picture.large
    const dat = dataPerson.results
    this.p1.friends = dat.slice(1).map(f => ({id:null,firstName: f.name.first, lastName: f.name.last}))
   
  }  

  getDataKayne = async function(){
    let dataPerson = await $.get(url2)
    this.p1.quote = dataPerson.quote
  }  

  getGifByPokemon = async function(pokeName) {
   const newApis = await $.get(`https://api.giphy.com/v1/gifs/search?api_key=YHkH8Svwjypn4v1pjX5Gv7iqEBWN27mH&q=${pokeName}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
   const newApi = newApis.data[0].embed_url
   
   return newApi
  }

  getRandomPokemon = async function()  {
    const randomId = Math.floor(Math.random() * totalPokemon) + 1
    const response = await $.get(url3+randomId)
  
    const pokemon = {
      name: response.name,
      sprite: response.sprites.front_default
    };
  
    this.p1.pokemon = pokemon
  //  getGifByPokemon(pokemon.name)

  }

  

getGif = async function () {
  this.getRandomPokemon().then(() => this.getGifByPokemon(this.p1.pokemon.name)).then(response => this.p1.pokemonGif=response)
}


  getFoodText = async function()  {
    const foodText = await $.get(url4)

    this.p1.foodText = foodText
 
  }


    
  pushPerson = function(){
    return Promise.all([this.getData(), this.getDataKayne(), this.getRandomPokemon(), this.getFoodText(), this.getGif()]).then(() => personsData.push({id:this.p1.id, person: this.p1}))
  }

}
