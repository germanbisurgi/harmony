/* global Box2D */

const PhysycsSystem = function () {
  const B2World = Box2D.Dynamics.b2World
  const B2Vec2 = Box2D.Common.Math.b2Vec2
  this.world = new B2World(new B2Vec2(0, 0), true)
}

PhysycsSystem.prototype.step = function () {
}

export default PhysycsSystem
