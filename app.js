require("./xyz.js") //one module into another
const obj = require('./calculate/sum.js')
// const {calculateSum, x} = require('./calculate/sum.js')
// const {calculateMultiply} = require('./calculate/multiply.js');


const {calculateMultiply, calculateSum, x} = require('./calculate')

const data = require('./data.json')

console.log('data->', data)
console.log('stringyfy->', varu = JSON.stringify(data))
// import { x, calculateSum } from "./sum.js"
console.log('app . js run ho gya')
var name = 'varun'

var a= 10
var b = 20


const util = require("node:util")
util.



obj.calculateSum(a,b)
console.log(obj.x)
calculateSum(3,8)
console.log(x)

console.log(globalThis === global)

const mul = calculateMultiply(2,2);

console.log('multiply->', mul)
