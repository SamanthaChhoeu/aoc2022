var fs = require('fs');
var array = fs.readFileSync('./input').toString().split("\n");

let totals = []
let counter = 0

for(i in array) {
    if (+array[i] > 0) {
      const num = +array[i]
      counter += num

    } else {
      totals.push(counter)
      counter = 0
    }
}

const sorted = totals.sort((a,b) => b-a)

console.log('highest: ', sorted[0])
console.log('three highest: ', sorted.slice(0,3).reduce((a, b) => a + b, 0))