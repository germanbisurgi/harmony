const AudioSourceComponent = function (config, system) {
  this.name = 'audio'
  this.clip = config.clip
  this.volume = 1
  this.system = system
  this.gain = this.system.context.createGain()
  this.loop = false
}

AudioSourceComponent.prototype.play = function () {
  const source = this.system.context.createBufferSource()
  source.buffer = this.clip
  source.loop = this.loop
  source.connect(this.gain)
  this.gain.connect(this.system.context.destination)
  this.gain.gain.value = this.volume
  source.start()
}

export default AudioSourceComponent
