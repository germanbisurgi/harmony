const KeySystem = function () {
  this.cache = {}
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

KeySystem.prototype.update = function (delta, frame) {
  for (const i in this.cache) {
    if (!Object.prototype.hasOwnProperty.call(this.cache, i)) {
      continue
    }
    if (this.cache[i].hold) {
      this.cache[i].holdTime += delta
      this.cache[i].endFrame = 0
      if (this.cache[i].startFrame === 0) {
        this.cache[i].startFrame = frame
      }
    } else {
      this.cache[i].holdTime = 0
      this.cache[i].startFrame = 0
      if (this.cache[i].endFrame === 0) {
        this.cache[i].endFrame = frame
      }
    }
    this.cache[i].start = (this.cache[i].startFrame === frame)
    this.cache[i].end = (this.cache[i].endFrame === frame)
  }
}

export default KeySystem
