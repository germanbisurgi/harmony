const Entity = function (tag) {
  this.mustDestroy = false
  this.components = []
  this.tag = tag || 'none'
}

Entity.prototype.addComponent = function (component) {
  component.owner = this
  this[component.name] = component
  this.components.push(component)
}

Entity.prototype.destroy = function () {
  this.components.forEach((component) => {
    component.destroy()
  })
  this.mustDestroy = true
}

export default Entity
