//modules

//importing
const names = require('./3.1-Names')
const greet = require('./3.2-SayHi')
const data = require('./3.3-OtherFlavors')
require('./3.4-fooExecution') // this function is executed even without being invoked. When we import a module we invoke it 

console.log(data);

greet('elina')
greet(names.peter)
greet(names.doe)