var fs = require('fs');
var array = fs.readFileSync('./input').toString().split("\n");

let total = 0

array.forEach((line) => {
  const pairs = line.split(',')

  if (pairs.length < 2) {
    return
  }

  const elf1Range = pairs[0].split('-')
  const elf2Range = pairs[1].split('-')

  const prevTotal = total
  if (parseInt(elf1Range[0]) >= parseInt(elf2Range[0]) && parseInt(elf1Range[1]) <= parseInt(elf2Range[1])){
    total += 1
  } else if (parseInt(elf1Range[0]) <= parseInt(elf2Range[0]) && parseInt(elf1Range[1]) >= parseInt(elf2Range[1])){
    total += 1
  } else if (parseInt(elf1Range[0]) >= parseInt(elf2Range[0]) && parseInt(elf1Range[0]) <= parseInt(elf2Range[1])){
    total += 1
  } else if (parseInt(elf1Range[1]) >= parseInt(elf2Range[0]) && parseInt(elf1Range[1]) <= parseInt(elf2Range[1])){
    total += 1
  }
})

console.log('total: ', total)
