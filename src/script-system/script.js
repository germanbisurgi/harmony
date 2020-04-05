const Script = function (params) {
  this.mustStart = true
  this.mustUpdate = false
  this.methods = Object.assign({
    start: () => {},
    update: () => {}
  }, params)
}

Script.prototype.name = 'script'

Script.prototype.start = function (engine, refs, owner) {
  return this.methods.start(engine, refs, owner)
}

Script.prototype.update = function (engine, refs, owner) {
  return this.methods.update(engine, refs, owner)
}

export default Script
