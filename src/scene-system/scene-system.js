const SceneSystem = function () {
  this.current = null
  this.requested = null
}

SceneSystem.prototype.switch = function (scene) {
  this.requested = scene
}

export default SceneSystem
