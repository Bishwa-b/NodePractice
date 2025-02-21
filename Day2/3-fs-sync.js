const { readFileSync, writeFileSync } = require('fs');

//reads the file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//write the file
writeFileSync(
  './content/writefile.txt',
  `Here is the result ${first},${second}`,
  { flag: 'a' } //appends to the file
);
