const RenderSystem = function (canvas) {
  this.canvas = canvas
  this.context = this.canvas.getContext('2d')
  this.canvas.height = window.innerHeight
  this.canvas.width = window.innerWidth
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

  entities.forEach((entity) => {
    if (entity.hasComponent('transform') && entity.hasComponent('renderable')) {
      this.context.save()
      this.context.translate(
        entity.transform.x + entity.renderable.width * 0.5 * entity.transform.scale - entity.renderable.width * entity.renderable.anchorX * entity.transform.scale,
        entity.transform.y + entity.renderable.height * 0.5 * entity.transform.scale - entity.renderable.height * entity.renderable.anchorY * entity.transform.scale
      )
      this.context.rotate(entity.transform.angle)
      this.context.scale(entity.transform.scale, entity.transform.scale)
      this.context.drawImage(
        entity.renderable.image,
        entity.renderable.width * -0.5, // do not touch this
        entity.renderable.height * -0.5, // do not touch this
        entity.renderable.width, // do not touch this
        entity.renderable.height // do not touch this
      )
      this.context.restore()
    }
  })
  this.context.restore()
}

export default RenderSystem
