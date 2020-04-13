const TransformComponent = function (params) {
  const config = Object.assign({
    x: 50,
    y: 50,
    angle: 0,
    scale: 1
  }, params)

  this.entity = null
  this.mustDestroy = false
  this.x = config.x
  this.y = config.y
  this.angle = config.angle
  this.scale = config.scale
}

TransformComponent.prototype.componentName = 'transform'

TransformComponent.prototype.destroy = function () {
  this.mustDestroy = true
}

export default TransformComponent
