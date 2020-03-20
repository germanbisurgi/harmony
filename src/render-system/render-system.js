import Renderable from './renderable'

const RenderSystem = function (_config) {
  this.canvas = document.querySelector(_config.canvas)
  this.context = this.canvas.getContext('2d')
  this.renderables = []
}

RenderSystem.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

RenderSystem.prototype.draw = function () {
  this.clear()
  this.context.save()

  // translate to camera center
  // this.context.translate(
  //   (this.camera.width / 2),
  //   (this.camera.height / 2)
  // )

  // rotate
  // this.context.rotate(this.camera.angle)

  // scale
  // this.context.scale(this.camera.zoom, this.camera.zoom)

  // this.context.strokeStyle = 'red'
  // this.canvas.circle(0, 0, 10)

  // this.context.translate(
  //   -(this.camera.width / 2),
  //   -(this.camera.height / 2)
  // )

  // translate
  // this.context.translate(
  //   -this.camera.position.x,
  //   -this.camera.position.y
  // )

  this.renderables.forEach(function (renderable) {
    this.context.save()
    this.context.translate(
      renderable.x + renderable.width * 0.5 * renderable.scale - renderable.width * renderable.anchorX * renderable.scale,
      renderable.y + renderable.height * 0.5 * renderable.scale - renderable.height * renderable.anchorY * renderable.scale
    )
    this.context.rotate(renderable.angle)
    this.context.scale(renderable.scale, renderable.scale)
    this.context.drawImage(
      renderable.image,
      renderable.width * -0.5, // do not touch this
      renderable.height * -0.5, // do not touch this
      renderable.width, // do not touch this
      renderable.height // do not touch this
    )
    this.context.restore()
  }.bind(this))
  this.context.restore()
}

RenderSystem.prototype.addRenderable = function (_config) {
  const renderable = new Renderable(_config)
  this.renderables.push(renderable)
}

export default RenderSystem
