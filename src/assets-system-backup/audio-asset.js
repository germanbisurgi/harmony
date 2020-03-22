/* global Audio */

const AudioAsset = function (config) {
  this.name = config.name
  this.url = config.url
  this.content = null
}

AudioAsset.prototype.load = function () {
  const audio = new Audio()
  audio.oncanplaythrough = () => {
    this.content = audio
    this.success(this)
    audio.oncanplaythrough = null
  }
  audio.onerror = () => {
    this.error()
  }
  audio.src = this.url
}

AudioAsset.prototype.success = function () {}

AudioAsset.prototype.error = function () {}

export default AudioAsset
