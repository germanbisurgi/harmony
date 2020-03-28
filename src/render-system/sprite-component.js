const SpriteComponent = function (params) {
  const config = Object.assign({
    name: 'sprite',
    image: null,
    width: 50,
    height: 50,
    anchorX: 0.5,
    anchorY: 0.5
  }, params)

  this.owner = null
  this.destroyed = false
  this.name = config.name
  this.image = config.image
  this.width = config.width
  this.height = config.height
  this.anchorX = config.anchorX
  this.anchorY = config.anchorY
}

SpriteComponent.prototype.destroy = function () {
  this.destroyed = true
  console.log('destroy sprite')
}

export default SpriteComponent
