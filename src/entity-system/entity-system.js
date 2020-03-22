/* global Harmony */

const EntitySystem = function () {
}

EntitySystem.prototype.add = function (config) {
  return new Harmony.Entity(config)
}

export default EntitySystem
