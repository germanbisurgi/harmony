import Transform from './transform'

const GameObject = function (_config) {
  this.transform = new Transform(_config)
}

GameObject.prototype.addComponent = function (_component) {
  this[_component.name] = _component
}

export default GameObject
