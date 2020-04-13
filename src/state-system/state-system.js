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
      if (component.states[component.current].exit) {
        component.states[component.current].exit(engine, component.entity)
      }
    }
    if (component.mustSwitch) {
      component.current = component.requested
      if (component.states[component.current].enter) {
        component.states[component.current].enter(engine, component.entity)
      }
      component.mustSwitch = false
    }
    if (component.current && component.states[component.current].update) {
      component.states[component.current].update(engine, component.entity)
    }
  }
}

export default StateSystem
