/* global Harmony */

const EntitySystem = function () {
  this.cache = []
}

EntitySystem.prototype.add = function (config) {
  const entity = new Harmony.Entity(config)
  this.cache.push(entity)
  return entity
}

export default EntitySystem
