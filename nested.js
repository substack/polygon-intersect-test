var pointInPolygon = require('point-in-polygon/nested')
var lineIntersection = require('line-segment-intersect-2d')
var v0 = [0,0]
var v1 = [0,0]
var v2 = [0,0]
var v3 = [0,0]
var v4 = [0,0]

module.exports = function polygonIntersectTestNested(a, b, arange, brange) {
  var astart, aend, bstart, bend
  if (arange === undefined) {
    astart = 0
    aend = a.length
  } else {
    astart = arange[0]
    aend = arange[1]
  }
  if (brange === undefined) {
    bstart = 0
    bend = b.length
  } else {
    bstart = brange[0]
    bend = brange[1]
  }
  var alen = aend - astart
  for (var i = 0; i < alen; i++) {
    v0[0] = a[astart+i][0]
    v0[1] = a[astart+i][1]
    v1[0] = a[astart+(i+1)%alen][0]
    v1[1] = a[astart+(i+1)%alen][1]
    var blen = bend - bstart
    for (var j = 0; j < blen; j++) {
      v2[0] = b[bstart+j][0]
      v2[1] = b[bstart+j][1]
      v3[0] = b[bstart+(j+1)%blen][0]
      v3[1] = b[bstart+(j+1)%blen][1]
      if (lineIntersection(v4,v0,v1,v2,v3)) return true
    }
  }
  v0[0] = b[bstart+0]
  v0[1] = b[bstart+1]
  if (pointInPolygon(v0, a, astart, aend)) return true
  return false
}
