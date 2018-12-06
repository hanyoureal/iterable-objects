export default (function() {
  Object.prototype[Symbol.iterator] = function*() {
    const values = Object.values(this)
    for (const v of values) {
      yield v
    }
  }
})()
