/* global Harmony */

const AudioSystem = function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  this.context = new AudioContext()
  this.components = []
  this.clips = {}
}

AudioSystem.prototype.play = function (component) {
  const clipName = component.clipName
  const source = this.context.createBufferSource()
  const gain = this.context.createGain()
  source.buffer = this.clips[clipName]
  source.loop = component.loop
  source.connect(gain)
  gain.connect(this.context.destination)
  gain.gain.value = component.volume

  // source.addEventListener('ended', () => {
  //   console.log('ended')
  // })

  source.start()
}

AudioSystem.prototype.loadClip = async function (config) {
  this.clips[config.name] = await this.loadAudioBuffer(config)
}

AudioSystem.prototype.addAudioSourceComponent = function (config) {
  const component = new Harmony.AudioSourceComponent(config, this)
  this.components.push(component)
  return component
}

AudioSystem.prototype.loadAudioBuffer = function (config) {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()
    const AudioContext = new (window.AudioContext || window.webkitAudioContext)()
    xhr.open('GET', config.url, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = () => {
      AudioContext.decodeAudioData(xhr.response, (buffer) => {
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
    if (component.destroyed) {
      this.components.splice(i, 1)
    } else {
      if (component.playing) {
        this.play(component)
        component.playing = false
      }
    }
  }
}

export default AudioSystem
