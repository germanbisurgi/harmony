const Entity = function (params) {
  const config = Object.assign({
    tags: [],
    x: 50,
    y: 50,
    angle: 0,
    scale: 1
  }, params)
  this.mustDestroy = false
  this.components = []
  this.tags = config.tags
  this.x = config.x
  this.y = config.y
  this.angle = config.angle
  this.scale = config.scale
}

Entity.prototype.addComponent = function (component) {
  component.entity = this
  this[component.componentName] = component
  this.components.push(component)
}

Entity.prototype.destroy = function () {
  this.components.forEach((component) => {
    component.destroy()
  })
  this.mustDestroy = true
}

Entity.prototype.hasTag = function (tag) {
  return this.tags.includes(tag)
}

export default Entity
