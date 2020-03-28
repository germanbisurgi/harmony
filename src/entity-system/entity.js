/* global Harmony */

const Entity = function (config) {
  this.components = []
  this.addComponent(new Harmony.TransformComponent(config))
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
}

export default Entity
