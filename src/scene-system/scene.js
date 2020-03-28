const Scene = function (params) {
  this.refs = {}
  this.created = false
  this.methods = Object.assign({
    create: (engine) => {},
    update: (engine) => {},
    draw: (engine) => {}
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
