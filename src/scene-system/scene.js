const Scene = function (params) {
  this.refs = {}
  this.mustCreate = false
  this.mustUpdate = false
  this.mustDraw = false
  this.methods = Object.assign({
    create: (engine) => {},
    update: (engine) => {},
    draw: (engine) => {}
  }, params)
}

Scene.prototype.requestCreate = function () {
  this.mustCreate = true
  this.mustUpdate = false
  this.mustDraw = false
}

Scene.prototype.requestUpdate = function () {
  this.mustCreate = false
  this.mustUpdate = true
  this.mustDraw = false
}

Scene.prototype.requestDraw = function () {
  this.mustCreate = false
  this.mustUpdate = false
  this.mustDraw = true
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
