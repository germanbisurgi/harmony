const State = function (name, _config) {
  this.name = name
  this.preloaded = false
  this.created = false
  this.methods = Object.assign({
    preload: (engine) => {},
    create: (engine) => {},
    update: (engine) => {}
  }, _config)
}

State.prototype.preload = function (engine) {
  return this.methods.preload(engine)
}

State.prototype.create = function (engine) {
  return this.methods.create(engine)
}

State.prototype.update = function (engine) {
  return this.methods.update(engine)
}

export default State
