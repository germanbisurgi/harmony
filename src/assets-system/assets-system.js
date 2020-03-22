/* global Harmony */
const AssetsSystem = function () {
  this.loaded = false
  this.errors = 0
  this.success = 0
  this.queue = []
  this.cache = []
}

AssetsSystem.prototype.addAudio = function (config) {
  const asset = new Harmony.AudioAsset(config)
  this.queue.push(asset)
}

AssetsSystem.prototype.addAudioBuffer = function (config) {
  const asset = new Harmony.AudioBufferAsset(config)
  this.queue.push(asset)
}

AssetsSystem.prototype.addImage = function (config) {
  const asset = new Harmony.ImageAsset(config)
  this.queue.push(asset)
}

AssetsSystem.prototype.addJSON = function (config) {
  const asset = new Harmony.JSONAsset(config)
  this.queue.push(asset)
}

AssetsSystem.prototype.get = function (name) {
  for (let i = 0, len = this.cache.length; i < len; i++) {
    if (this.cache[i].name === name) {
      return this.cache[i]
    }
  }
  return false
}

AssetsSystem.prototype.getAudio = function (name) {
  return this.get(name).content
}

AssetsSystem.prototype.getAudioBuffer = function (name) {
  return this.get(name).content
}

AssetsSystem.prototype.getImage = function (name) {
  return this.get(name).content
}

AssetsSystem.prototype.getJSON = function (name) {
  return this.get(name).content
}

AssetsSystem.prototype.hasCompleted = function () {
  if (this.queue.length === this.success + this.errors) {
    this.queue = []
    this.loading = false
    return true
  } else {
    return false
  }
}

AssetsSystem.prototype.load = function () {
  if (this.queue.length > 0) {
    this.loading = true
    for (let i = 0, len = this.queue.length; i < len; i++) {
      this.queue[i].load()
      this.queue[i].success = (asset) => {
        this.cache.push(asset)
        this.success++
        this.hasCompleted()
      }
      this.queue[i].error = () => {
        this.errors++
        this.hasCompleted()
      }
    }
  }
}

AssetsSystem.prototype.progress = function () {
  let progress = Math.floor((this.success + this.errors) / this.queue.length * 100)
  if (isNaN(progress)) {
    progress = 100
  }
  return progress
}

export default AssetsSystem
