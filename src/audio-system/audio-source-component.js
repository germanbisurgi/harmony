const AudioSourceComponent = function (params) {
  const config = Object.assign({
    playing: false,
    clipName: 'none',
    volume: 1
  }, params)

  this.playing = config.playing
  this.clipName = config.clipName
  this.volume = config.volume
  this.destroyed = false
  this.name = 'audio'
}

AudioSourceComponent.prototype.play = function (clipName) {
  if (typeof clipName !== 'undefined' && this.clipName !== clipName) {
    this.clipName = clipName
  }

  if (!this.playing) {
    this.playing = true
  }
}

AudioSourceComponent.prototype.stop = function () {
  this.playing = false
}

AudioSourceComponent.prototype.destroy = function () {
  this.destroyed = true
}

export default AudioSourceComponent
