var insideBody = `<div class="container">	
<div class="user-container">

</div>	
<div class="quote-container"></div>	
<div class="content-container">	
    <div class="pokemon-container"></div>	
    <div class="meat-container"></div>	
</div>	
<div class="friends">	
    <h4>Friends</h4>	
    <div class="friends-container">	
    </div>	
</div>	
<div class="buttons">	
    <button id="loadUser">Load User Data</button>	
</div>	
</div>`


const totalPokemon = 898

const url1 = "https://randomuser.me/api/?results=7&inc=gender,name,location,picture&noinfo"
const url2 = "https://api.kanye.rest"
const url3 = `https://pokeapi.co/api/v2/pokemon/`
const url4 = `https://baconipsum.com/api/?type=all-meat&sentences=3&start-with-lorem=1`