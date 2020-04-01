/* global Harmony */

const AudioSystem = function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  this.context = new AudioContext()
  this.clips = []
}

AudioSystem.prototype.loadClip = async function (config) {
  const clip = await this.loadAudioBuffer(config)
  this.clips.push(clip)
  return clip
}

AudioSystem.prototype.addAudioSourceComponent = function (config) {
  return new Harmony.AudioSourceComponent(config, this)
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
}

export default AudioSystem
