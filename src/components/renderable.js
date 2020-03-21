const Renderable = function (_config) {
  const config = Object.assign({
    name: 'renderable',
    image: null,
    width: 50,
    height: 50,
    anchorX: 0.5,
    anchorY: 0.5
  }, _config)

  this.owner = null
  this.name = config.name
  this.image = config.image
  this.width = config.width
  this.height = config.height
  this.anchorX = config.anchorX
  this.anchorY = config.anchorY
}

export default Renderable
