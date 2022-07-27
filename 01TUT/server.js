// Node runs on a server, not in a browser (backend not frontend)
// console.log ('Hello World!')

/* --------------------------------------------------------------- */
// Global object instead of window object
// console.log(global)

/* --------------------------------------------------------------- */
// has Common Core modules that we wil explore
// CommonJS modules instead of ES6 modules
// const os = require('os')
// const path = require('path')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

/* --------------------------------------------------------------- */
// const math = require('./math')
// math.add, math.substract, math.multiply, math.divide

// Destructurer
const {add, substract, multiply, divide } = require('./math')

console.log(add(2, 5))
console.log(substract(2, 5))
console.log(multiply(2, 5))
console.log(divide(2, 5))
