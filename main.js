const player1 = {
  name: 'Oleg',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['sausage', 'kitten', 'knife'],
  attack: function () {
    console.log(`${player1.name} Fight...`)
  }
};

const player2 = {
  name: 'Tanya',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['potato', 'puppy', 'gun'],
  attack: function () {
    console.log(`${player2.name} Fight...`)
  }
};

const createPlayer = function (className, character) {
  const $player = document.createElement('div');
  $player.classList.add(className);
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  const $character = document.createElement('div');
  $character.classList.add('character');
  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = `${character.hp}%`;
  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = character.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.src = character.img;
  $img.alt = character.name;
  $character.appendChild($img);

  const $parentNode = document.querySelector('.arenas');
  $parentNode.appendChild($player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);