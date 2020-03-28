const SceneSystem = function () {
  this.current = null
  this.requested = null
}

SceneSystem.prototype.switch = function (scene) {
  this.requested = scene
}

SceneSystem.prototype.update = function () {
  if (this.requested) {
    if (this.current) {
      this.current.created = false
    }
    this.current = this.requested
    this.requested = null
  }
}

export default SceneSystem
