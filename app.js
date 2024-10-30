require("./xyz.js") //one module into another
const obj = require('./sum.js')
const {calculateSum, x} = require('./sum.js')
var name = 'varun'

var a= 10
var b = 20

obj.calculateSum(a,b)
console.log(obj.x)
calculateSum(3,8)
console.log(x)

console.log(globalThis === global)