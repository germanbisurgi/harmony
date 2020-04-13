const ScriptComponent = function (params, system) {
  this.system = system
  this.mustDestroy = false
  this.mustStart = true
  this.mustUpdate = false
  this.methods = Object.assign({
    onStart: () => {},
    onUpdate: () => {}
  }, params)
}

export default ScriptComponent
