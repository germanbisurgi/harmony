const EntitySystem = function () {
  this.cache = []
}

EntitySystem.prototype.add = function (entity) {
  this.cache.push(entity)
}

export default EntitySystem
