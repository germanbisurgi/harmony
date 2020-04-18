const PhysicsComponent = function (system) {
  this.entity = null
  this.mustDestroy = false
  this.body = null
  this.system = system
  this.fixtures = []
}

export default PhysicsComponent
