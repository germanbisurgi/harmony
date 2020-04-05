const SpriteComponent = function (params) {
  const config = Object.assign({
    sprite: null,
    width: 50,
    height: 50,
    sourceX: 0,
    sourceY: 0,
    sourceWidth: 0,
    sourceHeight: 0,
    anchorX: 0.5,
    anchorY: 0.5,
    visible: true
  }, params)

  this.owner = null
  this.mustDestroy = false
  this.sprite = config.sprite
  this.width = config.width
  this.height = config.height
  this.sourceX = config.sourceX
  this.sourceY = config.sourceY
  this.sourceWidth = config.sourceWidth === 0 ? this.sprite.width : config.sourceWidth
  this.sourceHeight = config.sourceHeight === 0 ? this.sprite.height : config.sourceHeight
  this.anchorX = config.anchorX
  this.anchorY = config.anchorY
  this.visible = config.visible
}

SpriteComponent.prototype.name = 'sprite'

SpriteComponent.prototype.destroy = function () {
  this.mustDestroy = true
}

export default SpriteComponent
