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
  component.mustPlay = false
  const clip = component.clipName
  const source = this.context.createBufferSource()
  const gain = this.context.createGain()
  component.clipRef = source
  source.buffer = this.cache[clip]
  source.connect(gain)
  gain.connect(this.master)
  gain.gain.value = component.volume
  source.start()
}

AudioSystem.prototype.stop = function (component) {
  component.mustStop = false
  component.clipRef.stop()
}

AudioSystem.prototype.addAudioSourceComponent = function (config) {
  const component = new Harmony.AudioSourceComponent(config, this)
  this.components.push(component)
  return component
}

AudioSystem.prototype.loadClip = function (config) {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()
    const AudioContext = new (window.AudioContext || window.webkitAudioContext)()
    xhr.open('GET', config.url, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = () => {
      AudioContext.decodeAudioData(xhr.response, (buffer) => {
        this.cache[config.name] = buffer
        resolve(buffer)
      }, (reason) => {
        reject(reason)
      })
    }
    xhr.onerror = (reason) => {
      reject(reason)
    }
    xhr.send()
  })
}

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume()
  }
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
      continue
    }
    if (component.mustStop) {
      this.stop(component)
      continue
    }
    if (component.mustPlay) {
      this.play(component)
    }
  }
}

export default AudioSystem
