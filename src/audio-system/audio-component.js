const AudioComponent = function (system) {
  this.system = system
  this.source = null
  this.gain = null
  this.pan = null
  this.mustDestroy = false
  this.volume = 1
}

export default AudioComponent
