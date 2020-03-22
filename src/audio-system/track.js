const Track = function (config) {
  this.buffer = config.buffer
}

Track.prototype.play = function () {
  const source = window.audioCtx.createBufferSource()
  source.buffer = this.buffer
  source.connect(window.audioCtx.destination)
  source.start()
}

export default Track
