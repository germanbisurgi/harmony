/* global Harmony */

const StateSystem = function () {
  this.components = []
}

StateSystem.prototype.addStateComponent = function (config) {
  const component = new Harmony.StateComponent(config)
  this.components.push(component)
  return component
}

StateSystem.prototype.update = function (engine) {
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
      continue
    }
    if (component.current && component.mustSwitch) {
      component.states[component.current].exit(engine, component.owner)
    }
    if (component.mustSwitch) {
      component.current = component.requested
      component.states[component.current].enter(engine, component.owner)
      component.mustSwitch = false
    }
    if (component.current) {
      component.states[component.current].update(engine, component.owner)
    }
  }
}

export default StateSystem
