const StateComponent = function (params, system) {
  this.system = system
  this.entity = null
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

export default StateComponent
