const SpriteComponent = function (config, system) {
  this.system = system
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

export default SpriteComponent
