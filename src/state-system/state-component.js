const StateComponent = function (params) {
  this.owner = null
  this.mustDestroy = false
  this.mustSwitch = true
  this.requested = params.current
  this.current = null
  this.states = params.states
}

StateComponent.prototype.componentName = 'state'

StateComponent.prototype.switch = function (state) {
  this.mustSwitch = true
  this.requested = state
}

StateComponent.prototype.destroy = function () {
  this.mustDestroy = true
}

export default StateComponent
