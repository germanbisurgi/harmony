const BehaviourComponent = function (config, system) {
  this.system = system
  this.mustDestroy = false
  this.mustStart = true
  this.mustUpdate = false
  this.onStart = config.onStart
  this.onUpdate = config.onUpdate
}

export default BehaviourComponent
