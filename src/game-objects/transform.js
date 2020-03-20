const Transform = function (_config) {
  const config = Object.assign({
    x: 0,
    y: 0,
    angle: 0,
    scale: 1
  }, _config)

  this.x = config.x
  this.y = config.y
  this.angle = config.angle
  this.scale = config.scale
}

export default Transform
