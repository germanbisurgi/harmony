const Scene = function (name, _config) {
  this.name = name
  this.created = false
  this.methods = Object.assign({
    create: (engine) => {},
    update: (engine) => {},
    draw: (engine) => {}
  }, _config)
}

Scene.prototype.create = function (engine) {
  return this.methods.create(engine)
}

Scene.prototype.update = function (engine) {
  return this.methods.update(engine)
}

Scene.prototype.draw = function (engine) {
  return this.methods.draw(engine)
}

export default Scene
