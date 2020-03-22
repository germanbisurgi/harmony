const AudioBufferAsset = function (config) {
  this.name = config.name
  this.url = config.url
  this.content = null
}

AudioBufferAsset.prototype.load = function () {
  const xhr = new window.XMLHttpRequest()
  const AudioContext = new (window.AudioContext || window.webkitAudioContext)()
  xhr.open('GET', this.url, true)
  xhr.responseType = 'arraybuffer'
  xhr.onload = () => {
    AudioContext.decodeAudioData(xhr.response, (buffer) => {
      this.content = buffer
      this.success(this)
    }, () => {
      this.error()
    })
  }
  xhr.onerror = () => {
    this.error()
  }
  xhr.send()
}

AudioBufferAsset.prototype.success = function () {}

AudioBufferAsset.prototype.error = function () {}

export default AudioBufferAsset
