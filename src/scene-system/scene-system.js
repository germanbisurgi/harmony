const SceneSystem = function () {
  this.current = null
  this.cache = []
  this.requested = null
}

SceneSystem.prototype.add = function (scene) {
  this.cache.push(scene)
  return scene
}

SceneSystem.prototype.switch = function (scene) {
  this.requested = scene
}

SceneSystem.prototype.update = function () {
  if (this.requested) {
    this.current = this.requested
    this.requested = null
  }
}

export default SceneSystem
