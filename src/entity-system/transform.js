const Transform = function (params) {
  const config = Object.assign({
    name: 'transform',
    x: 0,
    y: 0,
    angle: 0,
    scale: 1
  }, params)

  this.owner = null
  this.name = config.name
  this.x = config.x
  this.y = config.y
  this.angle = config.angle
  this.scale = config.scale
}

export default Transform
