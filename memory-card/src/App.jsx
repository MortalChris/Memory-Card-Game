import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'


const storeCardInfo = [
  {name: "charmander", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", value: 1},
  {name: "bulbasaur", img: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png", value: 2},
  {name: "squirtle", img: "https://www.pngmart.com/files/22/Squirtle-Pokemon-PNG-Transparent-HD-Photo.png", value: 3},
  {name: "cyndaquil", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png", value: 4},
  {name: "chikorita", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png", value: 5},
  {name: "totodile", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png", value: 6},
  {name: "trecko", img: "https://gamepress.gg/pokemongo/sites/pokemongo/files/2017-08/252_1.png", value: 7},
  {name: "torchic", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png", value: 8},
  {name: "mudkip", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png", value: 9}
];


let shuffled;
function randomizeArray() {
  shuffled = storeCardInfo
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  console.log(shuffled);
}

// function CheckAlreadySelected(value) {
//   const [picked,setPicked] = useState([]);
//   if (picked.includes(value)) {
//     return;
//   } else {
//     setPicked([...picked, { value }]);
//     console.log(picked);
//   }
// }


function CreateDiv() {
      function remixOrder() {
        randomizeArray();
      }

      const [state, setState] = useState(0);
      const [highScore, setHighScore] = useState(0);
      const onClick = (event) => {//Causes CreateDiv to rerender
        if (event.currentTarget.className == "notSelected") {
          event.currentTarget.className = "selected";
          setState(state + 1);
          remixOrder();
          // CheckAlreadySelected(shuffled.value);
          console.log(state);
        } else {
          event.currentTarget.className = 'notSelected';
          remixOrder();
          setHighScore(state);
          setState(0);
          console.log("You lost");
        }


      };
    
  return (
    <div>
      <div>
        <p>Score: {state}</p>
        <p>HighScore: {highScore}</p>
      </div>
          {shuffled.map((shuffled) => (
            <figure key={shuffled.value}>
              <img onClick={onClick} src={shuffled.img} alt={shuffled.name} className='notSelected'/>
              <figcaption>{shuffled.name}</figcaption>
            </figure>
      ))}
    </div>
  )
}


function App() {
  return (
    <>
      <CreateDiv />
    </>
  )
}

export default App;

window.onload = randomizeArray();