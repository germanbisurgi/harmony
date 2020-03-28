/* global Harmony */

const KeySystem = function () {
  this.cache = {}
  this.delta = 0
  this.now = 0
  this.then = 0
  this.frame = 0
  document.addEventListener('keydown', this.handleKeyDown.bind(this), false)
  document.addEventListener('keyup', this.handleKeyUp.bind(this), false)
}

KeySystem.prototype.add = function (config) {
  const key = new Harmony.Key(config)
  this.cache[key.key] = key
  return key
}

KeySystem.prototype.handleKeyDown = function (event) {
  if (typeof this.cache[event.key] !== 'undefined') {
    this.cache[event.key].hold = true
    if (this.cache[event.key].preventDefault) {
      event.preventDefault()
    }
  }
}

KeySystem.prototype.handleKeyUp = function (event) {
  if (typeof this.cache[event.key] !== 'undefined') {
    this.cache[event.key].hold = false
    if (this.cache[event.key].preventDefault) {
      event.preventDefault()
    }
  }
}

KeySystem.prototype.update = function () {
  this.frame++
  this.now = window.performance.now()
  this.delta = this.now - this.then
  this.then = this.now
  for (const i in this.cache) {
    if (!Object.prototype.hasOwnProperty.call(this.cache, i)) {
      continue
    }
    if (this.cache[i].hold) {
      this.cache[i].holdTime += this.delta
      this.cache[i].endFrame = 0
      if (this.cache[i].startFrame === 0) {
        this.cache[i].startFrame = this.frame
      }
    } else {
      this.cache[i].holdTime = 0
      this.cache[i].startFrame = 0
      if (this.cache[i].endFrame === 0) {
        this.cache[i].endFrame = this.frame
      }
    }
    this.cache[i].start = (this.cache[i].startFrame === this.frame)
    this.cache[i].end = (this.cache[i].endFrame === this.frame)
  }
}

KeySystem.prototype.destroy = function () {
  this.cache = {}
}

export default KeySystem
