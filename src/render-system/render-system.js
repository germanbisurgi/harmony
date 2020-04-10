/* global Harmony Image */

const RenderSystem = function (canvas) {
  this.canvas = canvas
  this.context = this.canvas.getContext('2d')
  this.canvas.height = window.innerHeight
  this.canvas.width = window.innerWidth
  this.components = []
  this.cache = {}
}

RenderSystem.prototype.loadImage = function (config) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      this.cache[config.name] = image
      resolve(image)
    }
    image.onerror = (reason) => {
      reject(reason)
    }
    image.src = config.url
  })
}

RenderSystem.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

RenderSystem.prototype.get = function (image) {
  return this.cache[image]
}

RenderSystem.prototype.draw = function () {
  this.clear()
  // this.context.save()

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

  for (let i = this.components.length; i--;) {
    const component = this.components[i]

    if (component.mustDestroy) {
      this.components.splice(i, 1)
    } else {
      if (component.visible) {
        this.context.save()
        this.context.translate(
          component.owner.transform.x + component.width * 0.5 * component.owner.transform.scale - component.width * component.anchorX * component.owner.transform.scale,
          component.owner.transform.y + component.height * 0.5 * component.owner.transform.scale - component.height * component.anchorY * component.owner.transform.scale
        )
        this.context.rotate(component.owner.transform.angle)
        this.context.scale(
          component.owner.transform.scale,
          component.owner.transform.scale
        )

        this.context.drawImage(
          component.image,
          component.sourceX,
          component.sourceY,
          component.sourceWidth,
          component.sourceHeight,
          component.width * -0.5, // do not touch this
          component.height * -0.5, // do not touch this
          component.width, // do not touch this
          component.height // do not touch this
        )
        this.context.restore()
      }
    }
  }

  this.context.restore()
}

RenderSystem.prototype.addSpriteComponent = function (config) {
  const component = new Harmony.SpriteComponent(config)
  this.components.unshift(component)
  return component
}

RenderSystem.prototype.text = function (config) {
  this.context.fillText(config.text, config.x, config.y)
}

RenderSystem.prototype.circle = function (config) {
  this.context.beginPath()
  this.context.arc(config.x, config.y, config.radius, 0, 2 * Math.PI)
  this.context.stroke()
}

RenderSystem.prototype.line = function (config) {
  this.context.beginPath()
  this.context.moveTo(config.ax, config.ay)
  this.context.lineTo(config.bx, config.by)
  this.context.stroke()
}

RenderSystem.prototype.rect = function (config) {
  this.context.rect(config.x, config.y, config.width, config.height)
  this.context.stroke()
}

export default RenderSystem
