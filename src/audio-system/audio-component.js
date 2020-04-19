const AudioComponent = function (system) {
  this.system = system
  this.source = null
  this.gain = null
  this.mustDestroy = false
}

export default AudioComponent
