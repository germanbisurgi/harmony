const Scene = function (params) {
  this.created = false
  this.methods = Object.assign({
    create: (engine) => {},
    update: (engine) => {},
    draw: (engine) => {}
  }, params)
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
