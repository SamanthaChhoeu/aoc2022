var fs = require('fs');
var array = fs.readFileSync('./input').toString().split("\n");

let score = 0

const opponent = {
  A: 'Rock',
  B: 'Paper',
  C: 'Scissors'
}

const me = {
  X: 'Rock',
  Y: 'Paper',
  Z: 'Scissors'
}

for(i in array) {

  const values = array[i].split(' ')

  const player1 = opponent[values[0]]
  const player2 = me[values[1]]

  if (!player1 || !player2) {
    continue
  }

  
  if (player1 === player2) {
    score += 3
  }

  switch (player2){
    case 'Rock':
      score += 1
      if (player1 === 'Scissors') score += 6
      break
    case 'Paper':
      score += 2
      if (player1 === 'Rock') score += 6
      break  
    case 'Scissors':
      score += 3
      if (player1 === 'Paper') score += 6
  } 
}

console.log('score: ', score)
