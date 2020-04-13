const SpriteComponent = function (params, system) {
  this.system = system
  const config = Object.assign({
    image: null,
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

  this.entity = null
  this.mustDestroy = false
  this.image = config.image
  this.width = config.width
  this.height = config.height
  this.sourceX = config.sourceX
  this.sourceY = config.sourceY
  this.sourceWidth = config.sourceWidth
  this.sourceHeight = config.sourceHeight
  this.anchorX = config.anchorX
  this.anchorY = config.anchorY
  this.visible = config.visible
}

SpriteComponent.prototype.componentName = 'sprite'

export default SpriteComponent
