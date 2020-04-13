const AudioComponent = function (params, system) {
  const config = Object.assign({
    volume: 1
  }, params)
  this.system = system
  this.source = null
  this.volume = config.volume
  this.mustDestroy = false
}

export default AudioComponent
