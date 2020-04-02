const Entity = function (config) {
  this.destroyed = false
  this.components = []
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
  this.destroyed = true
}

export default Entity
