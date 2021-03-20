var polygonIntersectTestFlat = require('./flat.js')
var polygonIntersectTestNested = require('./nested.js')

module.exports = function polygonIntersectTest(a, b, arange, brange) {
  if (a.length > 0 && Array.isArray(a[0])) {
    return polygonIntersectTestNested(a, b, arange, brange)
  } else {
    return polygonIntersectTestFlat(a, b, arange, brange)
  }
}
