/* global Harmony */

const Entity = function (config) {
  this.addComponent(new Harmony.TransformComponent(config))
}

Entity.prototype.addComponent = function (component) {
  component.owner = this
  this[component.name] = component
}

Entity.prototype.hasComponent = function (componentName) {
  return Object.hasOwnProperty.call(this, componentName)
}

export default Entity
