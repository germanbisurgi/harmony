/* global Harmony */

const EntitySystem = function () {
  this.cache = []
  this.components = []
}

EntitySystem.prototype.add = function (config) {
  const entity = new Harmony.Entity(config)
  this.cache.push(entity)
  return entity
}

EntitySystem.prototype.update = function () {
  for (let i = this.cache.length; i--;) {
    const entity = this.cache[i]
    if (entity.mustDestroy) {
      this.cache.splice(i, 1)
    }
  }
}

EntitySystem.prototype.destroy = function (entity) {
  for (const i in entity.components) {
    if (Object.hasOwnProperty.call(entity.components, i)) {
      const component = entity.components[i]
      const system = component.system
      system.destroyComponent(entity)
    }
  }
  entity.mustDestroy = true
}

EntitySystem.prototype.hasTag = function (entity, tag) {
  return entity.tags.includes(tag)
}

EntitySystem.prototype.destroyAll = function () {
  for (let i = this.cache.length; i--;) {
    const entity = this.cache[i]
    this.destroy(entity)
  }
  this.cache = []
}

export default EntitySystem
