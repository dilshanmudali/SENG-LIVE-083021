const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },
];


const pokeForm = document.getElementById('poke-form')

const labels = document.getElementsByClassName('form-label')
console.log(labels)

const listItems = document.querySelectorAll('div')

const pokeContainer = document.querySelector('#poke-container')
const header = document.querySelectorAll('#header')
const lectureGoals = document.querySelector('#lecture-goals')

//creating elements

pokemons.forEach((pokemon) => {
  renderPokemon(pokemon)
})

function renderPokemon(character){
  const pokeCard = document.createElement('div')
        pokeCard.id = `poke-${character.id}`
        pokeCard.className = `poke-card`

  const pokeImg = document.createElement('img')
        pokeImg.src = character.img
        pokeImg.alt = `${character.name} image`


  pokeCard.appendChild(pokeImg)
  pokeContainer.appendChild(pokeCard)
  
}

// header.innerHTML += ''

//remove elements

lectureGoals.remove()

