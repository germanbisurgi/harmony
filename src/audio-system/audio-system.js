/* global Harmony */
const AudioSystem = function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  this.context = new AudioContext()
  this.master = this.context.createGain()
  this.components = []
  this.cache = {}
  this.master.connect(this.context.destination)
  this.audioComponentName = 'audio'
  this.listener = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5
  }
  this.threshold = 200
}

AudioSystem.prototype.calculateVolumeByDistance = function (entity) {
  const ax = this.listener.x
  const ay = this.listener.y
  const bx = entity.x
  const by = entity.y
  const distance = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by))
  let norm = distance / this.threshold
  if (norm > 1) {
    norm = 1
  }
  if (norm < 0) {
    norm = 0
  }
  return (1.0 - norm)
}

AudioSystem.prototype.play = function (entity, name) {
  const source = this.context.createBufferSource()
  const gain = entity.components.audio.gain
  entity.components.audio.source = source
  source.buffer = this.cache[name]
  source.connect(gain)
  gain.connect(this.master)
  source.start()
}

AudioSystem.prototype.stop = function (entity) {
  if (entity.components.audio.source) {
    entity.components.audio.source.stop()
  }
}

AudioSystem.prototype.addAudioComponent = function (entity) {
  const component = new Harmony.AudioComponent(this)
  component.entity = entity
  component.gain = this.context.createGain()
  entity.components[this.audioComponentName] = component
  this.components.push(component)
}

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume()
  }
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    const entity = component.entity
    if (component.mustDestroy) {
      this.components.splice(i, 1)
    } else {
      component.gain.gain.value = this.calculateVolumeByDistance(entity)
    }
  }
}

AudioSystem.prototype.destroyComponent = function (entity) {
  this.stop(entity)
  entity.components.audio.mustDestroy = true
}

export default AudioSystem
