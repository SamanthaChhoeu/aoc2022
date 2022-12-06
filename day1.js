const fs = require('fs');
  console.log('hi') 
fs.readFile('./input', 'utf8', (err, data) => {

  if (err) {

    console.error(err);
    return;
  }
  console.log(data);
});