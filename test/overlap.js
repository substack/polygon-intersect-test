var test = require('tape')
var polygonOverlap = require('../')

test('flat polygon overlap', function (t) {
  var A = [
    -1.00,-1.00,
    -1.00,+1.00,
    +1.00,+1.00,
    +1.00,-1.00,
    -1.00,-1.00,
    -1.00,-1.01,
    +1.01,-1.01,
    +1.01,+1.01,
    -1.01,+1.01,
    -1.01,-1.00,
  ]
  var B = [
    -0.50,+0.10,
    -0.80,-0.20,
    -0.40,+0.00,
  ]
  var C = [
    -0.90,+0.80,
    -1.05,-0.60,
    -0.75,+0.70,
  ]
  t.equal(polygonOverlap(A,B,[0,A.length],[0,B.length]), false)
  t.equal(polygonOverlap(B,A,[0,B.length],[0,A.length]), false)
  t.equal(polygonOverlap(A,C,[0,A.length],[0,C.length]), true)
  t.equal(polygonOverlap(C,A,[0,C.length],[0,A.length]), true)
  t.end()
})

test('nested polygon overlap', function (t) {
  var A = [
    [-1.00,-1.00],
    [-1.00,+1.00],
    [+1.00,+1.00],
    [+1.00,-1.00],
    [-1.00,-1.00],
    [-1.00,-1.01],
    [+1.01,-1.01],
    [+1.01,+1.01],
    [-1.01,+1.01],
    [-1.01,-1.00],
  ]
  var B = [
    [-0.50,+0.10],
    [-0.80,-0.20],
    [-0.40,+0.00],
  ]
  var C = [
    [-0.90,+0.80],
    [-1.05,-0.60],
    [-0.75,+0.70],
  ]
  t.equal(polygonOverlap(A,B,[0,A.length],[0,B.length]), false)
  t.equal(polygonOverlap(B,A,[0,B.length],[0,A.length]), false)
  t.equal(polygonOverlap(A,C,[0,A.length],[0,C.length]), true)
  t.equal(polygonOverlap(C,A,[0,C.length],[0,A.length]), true)
  t.end()
})
