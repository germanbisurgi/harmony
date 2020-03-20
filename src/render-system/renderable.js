const Renderable = function (_config) {
  const config = Object.assign({
    image: null,
    x: 0,
    y: 0,
    angle: 0,
    scale: 1,
    width: 50,
    height: 50,
    anchorX: 0,
    anchorY: 0
  }, _config)

  this.image = config.image
  this.x = config.x
  this.y = config.y
  this.width = config.width
  this.height = config.height
  this.angle = config.angle
  this.scale = config.scale
  this.anchorX = config.anchorX
  this.anchorY = config.anchorY
}

export default Renderable
