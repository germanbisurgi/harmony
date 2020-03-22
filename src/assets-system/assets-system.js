/* global Image Audio */
const AssetsSystem = function () {}

AssetsSystem.prototype.addImage = function (config) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.onerror = (reason) => {
      reject(reason)
    }
    image.src = config.url
  })
}

AssetsSystem.prototype.addAudio = function (config) {
  return new Promise((resolve, reject) => {
    const audio = new Audio()
    audio.oncanplaythrough = () => {
      resolve(audio)
      audio.oncanplaythrough = null
    }
    audio.onerror = (reason) => {
      reject(reason)
    }
    audio.src = config.url
  })
}

AssetsSystem.prototype.addAudioBuffer = function (config) {
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

AssetsSystem.prototype.addJSON = function (config) {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()
    xhr.open('GET', config.url, true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      }
    }
    xhr.onerror = (reason) => {
      reject(reason)
    }
    xhr.send()
  })
}

export default AssetsSystem
