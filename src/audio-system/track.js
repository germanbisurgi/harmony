const Track = function (config, system) {
  this.buffer = config.buffer
  this.system = system
}

Track.prototype.play = function () {
  const source = this.system.context.createBufferSource()
  source.buffer = this.buffer
  source.connect(this.system.context.destination)
  source.start()
}

export default Track
