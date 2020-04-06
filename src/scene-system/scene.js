const Scene = function (params) {
  this.methods = Object.assign({
    create: () => {},
    update: () => {},
    draw: () => {}
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
