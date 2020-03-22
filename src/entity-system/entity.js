/* global Harmony */

const Entity = function (config) {
  this.addComponent(new Harmony.TransformComponent(config))
}

Entity.prototype.addComponent = function (component) {
  component.owner = this
  this[component.name] = component
}

export default Entity
