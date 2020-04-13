/* global Harmony */

const AudioSystem = function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  this.context = new AudioContext()
  this.master = this.context.createGain()
  this.components = []
  this.cache = {}
  this.master.connect(this.context.destination)
}

AudioSystem.prototype.play = function (component) {
  const source = this.context.createBufferSource()
  const gain = this.context.createGain()
  component.source = source
  source.buffer = this.cache[component.audioName]
  source.connect(gain)
  gain.connect(this.master)
  gain.gain.value = component.volume
  source.start()
}

AudioSystem.prototype.stop = function (component) {
  if (component.source) {
    component.source.stop()
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
  entity.components.audio.mustDestroy = true
}

export default AudioSystem
