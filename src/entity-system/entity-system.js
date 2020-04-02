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
    if (entity.destroyed) {
      this.cache.splice(i, 1)
    }
  }
}

EntitySystem.prototype.destroy = function () {
  for (let i = this.cache.length; i--;) {
    const entity = this.cache[i]
    entity.destroy()
  }
  this.cache = []
}

export default EntitySystem
