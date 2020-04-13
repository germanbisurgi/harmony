/* global Harmony */
const AudioSystem = function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  this.context = new AudioContext()
  this.master = this.context.createGain()
  this.components = []
  this.cache = {}
  this.master.connect(this.context.destination)
}

AudioSystem.prototype.play = function (entity, name) {
  const source = this.context.createBufferSource()
  const gain = this.context.createGain()
  entity.components.audio.source = source
  source.buffer = this.cache[name]
  source.connect(gain)
  gain.connect(this.master)
  gain.gain.value = entity.components.audio.volume
  source.start()
}

AudioSystem.prototype.stop = function (entity) {
  if (entity.components.audio.source) {
    entity.components.audio.source.stop()
  }
}

AudioSystem.prototype.addAudioComponent = function (config) {
  const component = new Harmony.AudioComponent(config, this)
  this.components.push(component)
  return component
}

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume()
  }
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
    }
  }
}

AudioSystem.prototype.destroyComponent = function (entity) {
  this.stop(entity)
  entity.components.audio.mustDestroy = true
}

export default AudioSystem
