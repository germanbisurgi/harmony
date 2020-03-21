import Pointer from './pointer'

const PointerSystem = function (canvas) {
  this.cache = []
  this.canvas = canvas
  this.enablePointers()
}

PointerSystem.prototype.add = function () {
  const pointer = new Pointer()
  this.cache.unshift(pointer)
  return pointer
}

PointerSystem.prototype.enablePointers = function () {
  this.canvas.style.touchAction = 'none' // needed for mobile
  this.canvas.addEventListener('pointerdown', this.handlePointerDown.bind(this), false)
  this.canvas.addEventListener('pointermove', this.handlePointerMove.bind(this), false)
  this.canvas.addEventListener('pointerup', this.handlePointerUpAndCancel.bind(this), false)
  this.canvas.addEventListener('pointercancel', this.handlePointerUpAndCancel.bind(this), false)
  this.canvas.addEventListener('pointerleave', this.handlePointerUpAndCancel.bind(this), false)
}

PointerSystem.prototype.getPointerByID = function (id) {
  let output = false
  this.cache.forEach(function (pointer) {
    if (pointer.id === id) {
      output = pointer
    }
  })
  return output
}

PointerSystem.prototype.getInactivePointer = function () {
  let output = false
  this.cache.forEach(function (pointer) {
    if (pointer.active === false) {
      output = pointer
    }
  })
  return output
}

PointerSystem.prototype.handlePointerDown = function (event) {
  event.preventDefault()
  const pointer = this.getPointerByID(event.pointerId) || this.getInactivePointer()
  if (pointer) {
    pointer.active = true
    pointer.id = event.pointerId
    pointer.hold = true
    pointer.startX = event.clientX - event.target.offsetLeft
    pointer.startY = event.clientY - event.target.offsetTop
    pointer.x = event.clientX - event.target.offsetLeft
    pointer.y = event.clientY - event.target.offsetTop
  }
}

PointerSystem.prototype.handlePointerMove = function (event) {
  event.preventDefault()
  const pointer = this.getPointerByID(event.pointerId) || this.getInactivePointer()
  if (pointer) {
    pointer.active = true
    pointer.id = event.pointerId
    pointer.x = event.clientX - event.target.offsetLeft
    pointer.y = event.clientY - event.target.offsetTop
  }
}

PointerSystem.prototype.handlePointerUpAndCancel = function (event) {
  event.preventDefault()
  const pointer = this.getPointerByID(event.pointerId)
  if (pointer) {
    pointer.active = false
    pointer.hold = false
  }
}

PointerSystem.prototype.update = function (delta, frame) {
  this.cache.forEach(function (pointer) {
    if (pointer.hold) {
      pointer.holdTime += delta
      pointer.endFrame = 0
      if (pointer.startFrame === 0) {
        pointer.startFrame = frame
      }
    } else {
      pointer.holdTime = 0
      pointer.startFrame = 0
      if (pointer.endFrame === 0) {
        pointer.endFrame = frame
      }
    }
    pointer.start = (pointer.startFrame === frame)
    pointer.end = (pointer.endFrame === frame)
  })
}

export default PointerSystem
