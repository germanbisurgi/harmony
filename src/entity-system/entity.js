/* global Harmony */

const Entity = function (_config) {
  this.addComponent(new Harmony.Transform(_config))
}

Entity.prototype.addComponent = function (_component) {
  _component.owner = this
  this[_component.name] = _component
}

Entity.prototype.hasComponent = function (componentName) {
  return Object.hasOwnProperty.call(this, componentName)
}

export default Entity
