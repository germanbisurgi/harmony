/* global Harmony */

const EntitySystem = function () {
  this.cache = []
}

EntitySystem.prototype.add = function () {
  const entity = new Harmony.Entity()
  this.cache.push(entity)
  return entity
}

EntitySystem.prototype.destroy = function () {
  for (let i = this.cache.length; i--;) {
    const entity = this.cache[i]
    entity.destroy()
  }
  this.cache = []
}

export default EntitySystem
