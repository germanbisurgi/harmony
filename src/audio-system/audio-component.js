const AudioComponent = function (params, system) {
  const config = Object.assign({
    audioName: 'none',
    volume: 1
  }, params)

  this.system = system
  this.source = null
  this.audioName = config.audioName
  this.volume = config.volume
  this.mustDestroy = false
}

AudioComponent.prototype.componentName = 'audio'

AudioComponent.prototype.play = function (audioName) {
  if (audioName) {
    this.audioName = audioName
  }
  this.system.play(this)
}

AudioComponent.prototype.stop = function () {
  this.system.stop(this)
}

AudioComponent.prototype.destroy = function () {
  this.system.stop(this)
}

export default AudioComponent
