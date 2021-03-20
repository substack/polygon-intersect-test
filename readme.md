# polygon-intersect-test

determine whether two polygons intersect in 2d

This package works on both nested and flat arrays (good for typed arrays) and you can provide array
offsets to avoid instantiation overhead for subarray slices.

# example

``` js
var polygonIntersect = require('polygon-intersect-test')

var A = [
  -1.00,-1.00, -1.00,+1.00, +1.00,+1.00, +1.00,-1.00, -1.00,-1.00,
  -1.00,-1.01, +1.01,-1.01, +1.01,+1.01, -1.01,+1.01, -1.01,-1.00
]
var B = [ -0.50,+0.10, -0.80,-0.20, -0.40,+0.00, ]
var C = [ -0.90,+0.80, -1.05,-0.60, -0.75,+0.70 ]

console.log(polygonIntersect(A,B)) // false
console.log(polygonIntersect(A,C)) // true
```

# api

```
var polygonIntersectTest = require('polygon-intersect-test')
var polygonIntersectTestFlat = require('polygon-intersect-test/flat')
var polygonIntersectTestNested = require('polygon-intersect-test/nested')
```

## polygonIntersectTest(A, B, arange, brange)

Return a boolean of whether the polygons `A` and `B` intersect.

`A` and `B` may both be flat arrays or they may both be nested arrays of 2-item `[x,y]` arrays.

Optionally provide `arange` or `brange` as 2-item arrays of `[start,end]` array index offsets into
the respective `A` or `B` polygon.

You may also use the dedicated flat (`polygonIntersectTestFlat`) or nested
(`polygonIntersectTestNested`) routines to skip a check to find the appropriate implementation.

# install

```
npm install polygon-intersection-test
```

# license

bsd
