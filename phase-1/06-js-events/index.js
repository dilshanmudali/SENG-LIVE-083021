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

const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");




function renderPokemon(pokemon) {
  // const pokeCard = document.createElement("div");
  // pokeCard.id = `poke-${pokemon.id}`;
  // pokeCard.className = "poke-card";

  const pokeCard = document.createElement('div')
        pokeCard.id = `poke-${pokemon.id}`
        pokeCard.className = 'poke-card'

  // const pokeImg = document.createElement("img");
  // pokeImg.src = pokemon.img;
  // pokeImg.alt = `${pokemon.name} image`;

  const pokeImg = document.createElement('img')
        pokeImg.src = pokemon.img
        pokeImg.alt = `${pokemon.name} image`

  // const pokeName = document.createElement("h3");
  // pokeName.textContent = pokemon.name;

  const pokeName = document.createElement('h3')
        pokeName.textContent = pokemon.name

  // const pokeLikes = document.createElement("h3");
  // pokeLikes.textContent = "Likes: ";

  const pokeLikes = document.createElement('h3')
        pokeLikes.textContent = 'likes'

  // const likesNum = document.createElement("h5");
  // likesNum.className = "like-num";
  // likesNum.textContent = pokemon.likes;

  const likesNum = document.createElement('h5')
        likesNum.className = 'like-num'
        likesNum.textContent = pokemon.likes

  // const likeBttn = document.createElement("button");
  // likeBttn.className = "like-bttn";
  // likeBttn.textContent = "♥";

  const likeBttn = document.createElement('button')
        likeBttn.className = 'like-bttn'
        likeBttn.textContent ="♥"
        likeBttn.addEventListener('click', () => likesEvent(pokemon, likesNum))

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener('click', () => deletePoke(pokeCard))


  pokeCard.append(pokeImg,pokeName, pokeLikes,likesNum, likeBttn, deleteBttn)
  pokeContainer.appendChild(pokeCard)

  // pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  // pokeContainer.appendChild(pokeCard);
}

// //grab values from the form
// function createPokemon(event){

//   event.preventDefault()

//   const name = document.querySelector('#name-input').value 
//   const img = event.target.querySelector('#img-input').value


//   //going to create a new pokemon object
//   const pokemon = {
//     name: name,
//     img: img,
//     likes: 0,
//     id: 6 
//   }

//   //render new character to dom
//   renderPokemon(pokemon)

//   //clear the form
//   pokeForm.reset()

// }

function deletePoke(del){
  del.remove()
}


function createPokemon(event){
  event.preventDefault()

  const nameInput = document.querySelector('#name-input').value
  const imgInput = document.querySelector('#img-input').value

  const pokemon = {
    name: nameInput,
    img: imgInput,
    likes: 0,
    id: 6
  }

  renderPokemon(pokemon)
  pokeForm.reset()
}

function likesEvent(pokemon, likesNum){
  ++pokemon.likes
  likesNum.textContent = pokemon.likes
}




// //responsible for running javascript on the page

// function init(){
//   pokemons.forEach(function (pokemon) {
//     renderPokemon(pokemon);
//   });

function init(){
  pokemons.forEach((pokemon) => {
    return renderPokemon(pokemon)
  })

  pokeForm.addEventListener('submit', createPokemon)
}
  

//   pokeForm.addEventListener('submit', createPokemon)
// }

init()