const Entity = function (params) {
  const config = Object.assign({
    tags: []
  }, params)
  this.mustDestroy = false
  this.components = []
  this.tags = config.tags
}

Entity.prototype.addComponent = function (component) {
  component.owner = this
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
