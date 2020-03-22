/* global Harmony */

const AudioSystem = function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  this.context = new AudioContext()
}

AudioSystem.prototype.add = function (config) {
  return new Harmony.Track(config, this)
}

AudioSystem.prototype.update = function () {
  if (this.context.state === 'suspended') {
    this.context.resume()
  }
}

export default AudioSystem
