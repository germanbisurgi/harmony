/* global Audio */

const AudioAsset = function (name, url) {
  this.name = name
  this.url = url
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
