/* global Harmony */

const TransformSystem = function () {
  this.components = []
}

TransformSystem.prototype.addTransformComponent = function (config) {
  const transformComponent = new Harmony.TransformComponent(config)
  this.components.push(transformComponent)
  return transformComponent
}

TransformSystem.prototype.update = function () {
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.destroyed) {
      this.components.splice(i, 1)
    }
  }
}

export default TransformSystem
