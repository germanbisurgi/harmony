/* global Harmony */

const RenderSystem = function (canvas) {
  this.canvas = canvas
  this.context = this.canvas.getContext('2d')
  this.canvas.height = window.innerHeight
  this.canvas.width = window.innerWidth
  this.components = []
}

RenderSystem.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

RenderSystem.prototype.draw = function (entities) {
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

  this.components.forEach((component) => {
    this.context.save()
    this.context.translate(
      component.owner.transform.x + component.width * 0.5 * component.owner.transform.scale - component.width * component.anchorX * component.owner.transform.scale,
      component.owner.transform.y + component.height * 0.5 * component.owner.transform.scale - component.height * component.anchorY * component.owner.transform.scale
    )
    this.context.rotate(component.owner.transform.angle)
    this.context.scale(component.owner.transform.scale, component.owner.transform.scale)
    this.context.drawImage(
      component.image,
      component.width * -0.5, // do not touch this
      component.height * -0.5, // do not touch this
      component.width, // do not touch this
      component.height // do not touch this
    )
    this.context.restore()
  })
  this.context.restore()
}

RenderSystem.prototype.addRenderComponent = function (config) {
  const renderComponent = new Harmony.Renderable(config)
  this.components.push(renderComponent)
  return renderComponent
}

export default RenderSystem
