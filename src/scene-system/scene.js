const Scene = function (params) {
  this.refs = {}
  this.methods = Object.assign({
    create: () => {},
    update: () => {},
    draw: () => {}
  }, params)
}

Scene.prototype.create = function (engine, refs) {
  return this.methods.create(engine, refs)
}

Scene.prototype.update = function (engine, refs) {
  return this.methods.update(engine, refs)
}

Scene.prototype.draw = function (engine, refs) {
  return this.methods.draw(engine, refs)
}

export default Scene
