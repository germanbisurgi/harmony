const Key = function (_config) {
  const config = Object.assign({
    key: key,
    preventDefault: false
  }, _config)

  this.key = config.key
  this.preventDefault = config.preventDefault
  this.start = false
  this.end = false
  this.hold = false
  this.holdTime = 0
  this.startFrame = 0
  this.endFrame = 0
}

export default Key
