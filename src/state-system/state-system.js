/* global Harmony */

const StateSystem = function () {
  this.components = []
  this.stateComponentName = 'state'
}

StateSystem.prototype.addStateComponent = function (entity, config) {
  const component = new Harmony.StateComponent(config, this)
  component.entity = entity
  entity.components[this.stateComponentName] = component
  this.components.push(component)
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

StateSystem.prototype.destroyComponent = function (entity) {
  entity.components.state.mustDestroy = true
}

export default StateSystem
