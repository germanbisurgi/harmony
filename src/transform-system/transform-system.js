/* global Harmony */

const TransformSystem = function () {
  this.components = []
}

TransformSystem.prototype.addTransformComponent = function (config) {
  const component = new Harmony.TransformComponent(config)
  this.components.push(component)
  return component
}

TransformSystem.prototype.update = function () {
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
    }
  }
}

export default TransformSystem
