var polygonIntersect = require('../')

var A = [
  -1.00,-1.00, -1.00,+1.00, +1.00,+1.00, +1.00,-1.00, -1.00,-1.00,
  -1.00,-1.01, +1.01,-1.01, +1.01,+1.01, -1.01,+1.01, -1.01,-1.00
]
var B = [ -0.50,+0.10, -0.80,-0.20, -0.40,+0.00, ]
var C = [ -0.90,+0.80, -1.05,-0.60, -0.75,+0.70 ]

console.log(polygonIntersect(A,B)) // false
console.log(polygonIntersect(A,C)) // true
