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

Entity.prototype.addComponent = function (component) {
  component.entity = this
  this.components[component.componentName] = component
}

Entity.prototype.destroy = function () {
  for (const i in this.components) {
    if (Object.hasOwnProperty.call(this.components, i)) {
      const component = this.components[i]
      const system = component.system
      const entity = this
      system.destroyComponent(entity)
    }
  }
  this.mustDestroy = true
}

Entity.prototype.hasTag = function (tag) {
  return this.tags.includes(tag)
}

export default Entity
