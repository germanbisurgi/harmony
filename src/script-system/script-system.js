/* global Harmony */

const ScriptSystem = function () {
  this.components = []
}

ScriptSystem.prototype.addScriptComponent = function (config) {
  const component = new Harmony.Script(config)
  this.components.push(component)
  return component
}

ScriptSystem.prototype.update = function (engine, refs) {
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
      continue
    }
    if (component.mustStart) {
      component.mustStart = false
      component.mustUpdate = true
      component.start(engine, refs, component.owner)
      continue
    }
    if (component.mustUpdate) {
      component.update(engine, refs, component.owner)
    }
  }
}

export default ScriptSystem
