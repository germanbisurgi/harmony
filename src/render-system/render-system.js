import Camera from './camera'
import Canvas from './canvas'
import Renderable from './renderable'

const RenderSystem = function () {
  this.camera = new Camera()
  this.canvas = new Canvas('#engine-container')
  this.renderables = []
}

RenderSystem.prototype.draw = function () {
  this.canvas.clear()
  this.canvas.context.save()

  // translate to camera center
  this.canvas.context.translate(
    (this.camera.width / 2),
    (this.camera.height / 2)
  )

  // rotate
  this.canvas.context.rotate(this.camera.angle)

  // scale
  this.canvas.context.scale(this.camera.zoom, this.camera.zoom)

  this.canvas.context.strokeStyle = 'red'
  this.canvas.circle(0, 0, 10)

  this.canvas.context.translate(
    -(this.camera.width / 2),
    -(this.camera.height / 2)
  )

  // translate
  this.canvas.context.translate(
    -this.camera.position.x,
    -this.camera.position.y
  )

  this.renderables.forEach(function (renderable) {
    this.canvas.context.save()
    this.canvas.context.translate(renderable.x, renderable.y)
    this.canvas.context.rotate(renderable.angle)
    this.canvas.context.drawImage(
      renderable.image,
      renderable.width / -2,
      renderable.height / -2,
      renderable.width,
      renderable.height
    )
    this.canvas.context.restore()
  }.bind(this))
  // this.game.physics.world.DrawDebugData();
  this.canvas.context.restore()
}

RenderSystem.prototype.addRenderable = function (image, x, y, width, height, angle) {
  const renderable = new Renderable(image, x, y, width, height, angle)
  this.renderables.push(renderable)
  return renderable
}

export default RenderSystem
