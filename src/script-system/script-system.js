/* global Harmony */

const ScriptSystem = function () {
  this.components = []
}

ScriptSystem.prototype.addScriptComponent = function (config) {
  const component = new Harmony.ScriptComponent(config, this)
  this.components.push(component)
  return component
}

ScriptSystem.prototype.update = function (engine) {
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
      continue
    }
    if (component.mustStart) {
      component.start(engine)
      continue
    }
    if (component.mustUpdate) {
      component.update(engine)
    }
  }
}

ScriptSystem.prototype.destroyComponent = function (entity) {
  entity.components.script.mustDestroy = true
}

export default ScriptSystem
