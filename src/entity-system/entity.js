const Entity = function (params) {
  const config = Object.assign({
    tags: [],
    x: 0,
    y: 0,
    angle: 0,
    scale: 1
  }, params)
  this.mustDestroy = false
  this.components = {}
  this.tags = config.tags
  this.x = config.x
  this.y = config.y
  this.angle = config.angle
  this.scale = config.scale
}

export default Entity
