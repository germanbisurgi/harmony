const SceneSystem = function () {
  this.current = null
  this.cache = []
  this.requested = null
}

SceneSystem.prototype.add = function (scene) {
  this.cache.push(scene)
  return scene
}

SceneSystem.prototype.getByName = function (sceneName) {
  let output = false
  this.cache.forEach(function (scene) {
    if (scene.name === sceneName) {
      output = scene
    }
  })
  return output
}

SceneSystem.prototype.switch = function (sceneName) {
  this.requested = sceneName
}

SceneSystem.prototype.update = function () {
  if (this.requested) {
    this.current = this.getByName(this.requested)
    this.requested = null
  }
}

export default SceneSystem
