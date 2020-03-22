/* global Harmony */

const AudioSystem = function (buffer) {}

AudioSystem.prototype.add = function (config) {
  return new Harmony.Track(config)
}

export default AudioSystem
