const TransformComponent = function (params) {
  const config = Object.assign({
    x: 0,
    y: 0,
    angle: 0,
    scale: 1
  }, params)

  this.owner = null
  this.mustDestroy = false
  this.x = config.x
  this.y = config.y
  this.angle = config.angle
  this.scale = config.scale
}

TransformComponent.prototype.name = 'transform'

TransformComponent.prototype.destroy = function () {
  this.mustDestroy = true
}

export default TransformComponent
