var fs = require('fs');
var array = fs.readFileSync('./input').toString().split("\n");

let score = 0

const opponent = {
  A: 'Rock',
  B: 'Paper',
  C: 'Scissors'
}

const me = {
  X: 'Lose',
  Y: 'Draw',
  Z: 'Win'
}

for(i in array) {

  const values = array[i].split(' ')

  const player1 = opponent[values[0]]
  const player2 = me[values[1]]

  if (!player1 || !player2) {
    continue
  }

  let player2play 

  switch (player2){
    case 'Lose':
      if (player1 === 'Rock') player2play = 'Scissors'
      if (player1 === 'Paper') player2play = 'Rock'
      if (player1 === 'Scissors') player2play = 'Paper'
      break
    case 'Draw':
      score += 3
      if (player1 === 'Rock') player2play = 'Rock'
      if (player1 === 'Paper') player2play = 'Paper'
      if (player1 === 'Scissors') player2play = 'Scissors'
      break  
    case 'Win':
      score += 6
      if (player1 === 'Rock') player2play = 'Paper'
      if (player1 === 'Paper') player2play = 'Scissors'
      if (player1 === 'Scissors') player2play = 'Rock'
  } 

  switch (player2play){
     case 'Rock':
      score += 1
      break
    case 'Paper':
      score += 2
      break
    case 'Scissors':
      score += 3
      break
  }
}

console.log('score: ', score)
