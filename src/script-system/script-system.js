/* global Harmony */

const ScriptSystem = function (engine) {
  this.engine = engine
  this.components = []
  this.scriptComponentName = 'script'
}

ScriptSystem.prototype.addScriptComponent = function (entity, config) {
  const component = new Harmony.ScriptComponent(config, this)
  component.entity = entity
  entity.components[this.scriptComponentName] = component
  this.components.push(component)
}

ScriptSystem.prototype.update = function () {
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    const entity = component.entity
    if (component.mustDestroy) {
      this.components.splice(i, 1)
      continue
    }
    if (component.mustStart) {
      this.onStart(entity)
      continue
    }
    if (component.mustUpdate) {
      this.onUpdate(entity)
    }
  }
}

ScriptSystem.prototype.onStart = function (entity) {
  entity.components.script.mustStart = false
  entity.components.script.mustUpdate = true
  return entity.components.script.methods.onStart(this.engine, entity)
}

ScriptSystem.prototype.onUpdate = function (entity) {
  return entity.components.script.methods.onUpdate(this.engine, entity)
}

ScriptSystem.prototype.destroyComponent = function (entity) {
  entity.components.script.mustDestroy = true
}

export default ScriptSystem
