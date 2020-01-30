const Pointer = function () {
  this.active = false
  this.hold = false
  this.start = false
  this.end = false
  this.holdTime = 0
  this.startFrame = 0
  this.endFrame = 0
  this.id = 0
  this.startX = 0
  this.startY = 0
  this.x = 0
  this.y = 0
}

Pointer.prototype.getPosition = function () {
  return {
    x: this.x,
    y: this.y
  }
}

export default Pointer
