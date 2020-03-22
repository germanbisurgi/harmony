const Key = function (params) {
  const config = Object.assign({
    preventDefault: false
  }, params)

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
