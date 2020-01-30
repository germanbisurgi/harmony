const LoopSystem = function () {
  this.accumulator = 0
  this.delta = 0
  this.lastTime = 0
  this.lastStep = 0
  this.fps = 60
  this.frame = 0
  this.paused = false
  this.timestep = 1000 / this.fps
}

LoopSystem.prototype.continue = function () {
  this.paused = false
}

LoopSystem.prototype.pause = function () {
  this.paused = true
}

LoopSystem.prototype.run = function (timestamp) {
  timestamp = timestamp || 0
  this.timestep = 1000 / this.fps
  this.accumulator += timestamp - this.lastTime
  this.lastTime = timestamp
  while (!this.paused && this.accumulator >= this.timestep) {
    this.step()
    this.delta = timestamp - this.lastStep
    this.lastStep = timestamp
    this.accumulator -= this.timestep
  }
  window.requestAnimationFrame(this.run.bind(this))
}

LoopSystem.prototype.step = function () {
  this.frame++
  this.onStep()
}

LoopSystem.prototype.onStep = function () {}

export default LoopSystem
