import AudioAsset from './audio-asset'
import AudioBufferAsset from './audio-buffer-asset'
import ImageAsset from './image-asset'
import JSONAsset from './json-asset'

const AssetsSystem = function () {
  this.loaded = false
  this.errors = 0
  this.success = 0
  this.queue = []
  this.cache = []
}

AssetsSystem.prototype.addAudio = function (name, url) {
  const asset = new AudioAsset(name, 'audio', url)
  this.queue.push(asset)
}

AssetsSystem.prototype.addAudioBuffer = function (name, url) {
  const asset = new AudioBufferAsset(name, 'audio-buffer', url)
  this.queue.push(asset)
}

AssetsSystem.prototype.addImage = function (name, url) {
  const asset = new ImageAsset(name, 'image', url)
  this.queue.push(asset)
}

AssetsSystem.prototype.addJSON = function (name, url) {
  const asset = new JSONAsset(name, 'json', url)
  this.queue.push(asset)
}

AssetsSystem.prototype.get = function (type, name) {
  for (let i = 0, len = this.cache.length; i < len; i++) {
    if (this.cache[i].type === type && this.cache[i].name === name) {
      return this.cache[i]
    }
  }
  return false
}

AssetsSystem.prototype.getAudio = function (name) {
  return this.get('audio', name).content
}

AssetsSystem.prototype.getAudioBuffer = function (name) {
  return this.get('audio-buffer', name).content
}

AssetsSystem.prototype.getImage = function (name) {
  return this.get('image', name).content
}

AssetsSystem.prototype.getJSON = function (name) {
  return this.get('json', name).content
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

export default AssetsSystem
