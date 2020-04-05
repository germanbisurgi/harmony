const AudioSourceComponent = function (params) {
  const config = Object.assign({
    clipRef: null,
    mustPlay: false,
    mustStop: false,
    clipName: 'none',
    volume: 1
  }, params)

  this.clipRef = config.clipRef
  this.mustPlay = config.mustPlay
  this.mustStop = config.mustStop
  this.clipName = config.clipName
  this.volume = config.volume
  this.mustDestroy = false
}

AudioSourceComponent.prototype.name = 'audio'

AudioSourceComponent.prototype.play = function (clipName) {
  if (clipName) {
    this.clipName = clipName
  }
  this.mustPlay = true
}

AudioSourceComponent.prototype.stop = function () {
  this.mustStop = true
}

AudioSourceComponent.prototype.destroy = function () {
  this.mustDestroy = true
}

export default AudioSourceComponent
