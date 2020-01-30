import Pointer from './pointer'

const PointerSystem = function () {
  this.pointers = []
}

PointerSystem.prototype.add = function () {
  const pointer = new Pointer(this.pointers.length + 1)
  this.pointers.unshift(pointer)
  return pointer
}

PointerSystem.prototype.enablePointers = function (canvas) {
  canvas.style.touchAction = 'none'
  canvas.addEventListener('pointerdown', this.handlePointerDown.bind(this), false)
  canvas.addEventListener('pointermove', this.handlePointerMove.bind(this), false)
  canvas.addEventListener('pointerup', this.handlePointerUpAndCancel.bind(this), false)
  canvas.addEventListener('pointercancel', this.handlePointerUpAndCancel.bind(this), false)
  canvas.addEventListener('pointerleave', this.handlePointerUpAndCancel.bind(this), false)
}

PointerSystem.prototype.getPointerByID = function (id) {
  let output = false
  this.pointers.forEach(function (pointer) {
    if (pointer.id === id) {
      output = pointer
    }
  })
  return output
}

PointerSystem.prototype.getInactivePointer = function () {
  let output = false
  this.pointers.forEach(function (pointer) {
    if (pointer.active === false) {
      output = pointer
    }
  })
  return output
}

PointerSystem.prototype.handlePointerDown = function (event) {
  event.preventDefault()
  const pointer = this.getPointerByID(event.pointerId) || this.getInactivePointer()
  pointer.active = true
  pointer.id = event.pointerId
  pointer.hold = true
  pointer.startX = event.clientX - event.target.offsetLeft
  pointer.startY = event.clientY - event.target.offsetTop
  pointer.x = event.clientX - event.target.offsetLeft
  pointer.y = event.clientY - event.target.offsetTop
}

PointerSystem.prototype.handlePointerMove = function (event) {
  event.preventDefault()
  const pointer = this.getPointerByID(event.pointerId) || this.getInactivePointer()
  pointer.active = true
  pointer.id = event.pointerId
  pointer.x = event.clientX - event.target.offsetLeft
  pointer.y = event.clientY - event.target.offsetTop
}

PointerSystem.prototype.handlePointerUpAndCancel = function (event) {
  event.preventDefault()
  const pointer = this.getPointerByID(event.pointerId)
  pointer.active = false
  pointer.hold = false
  pointer.startX = 0
  pointer.startY = 0
}

PointerSystem.prototype.update = function (delta, frame) {
  this.pointers.forEach(function (pointer) {
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
