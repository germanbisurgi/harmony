const ScriptComponent = function (params) {
  this.mustDestroy = false
  this.mustStart = true
  this.mustUpdate = false
  this.methods = Object.assign({
    start: () => {},
    update: () => {}
  }, params)
}

ScriptComponent.prototype.componentName = 'script'

ScriptComponent.prototype.start = function (engine) {
  this.mustStart = false
  this.mustUpdate = true
  return this.methods.start(engine)
}

ScriptComponent.prototype.update = function (engine) {
  return this.methods.update(engine)
}

ScriptComponent.prototype.destroy = function () {
  this.mustDestroy = true
}

export default ScriptComponent
