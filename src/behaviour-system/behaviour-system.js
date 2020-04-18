/* global Harmony */

const BehaviourSystem = function (engine) {
  this.engine = engine
  this.components = []
  this.behaviourComponentName = 'behaviour'
}

BehaviourSystem.prototype.addBehaviourComponent = function (entity, config) {
  const component = new Harmony.BehaviourComponent(config, this)
  component.entity = entity
  entity.components[this.behaviourComponentName] = component
  this.components.push(component)
}

BehaviourSystem.prototype.update = function () {
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

BehaviourSystem.prototype.onStart = function (entity) {
  entity.components[this.behaviourComponentName].mustStart = false
  entity.components[this.behaviourComponentName].mustUpdate = true
  return entity.components[this.behaviourComponentName].methods.onStart(this.engine, entity)
}

BehaviourSystem.prototype.onUpdate = function (entity) {
  return entity.components[this.behaviourComponentName].methods.onUpdate(this.engine, entity)
}

BehaviourSystem.prototype.destroyComponent = function (entity) {
  entity.components[this.behaviourComponentName].mustDestroy = true
}

export default BehaviourSystem
