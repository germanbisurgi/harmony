/* global Box2D Harmony */

const PhysicsSystem = function (canvas) {
  const B2World = Box2D.Dynamics.b2World
  const B2Vec2 = Box2D.Common.Math.b2Vec2
  const B2DebugDraw = Box2D.Dynamics.b2DebugDraw

  this.world = new B2World(new B2Vec2(0, 0), true)
  this.fps = 60
  this.components = []
  this.scale = 100
  this.context = canvas.getContext('2d')

  const debugDraw = new B2DebugDraw(this.context)
  debugDraw.SetSprite(canvas.getContext('2d'))
  debugDraw.SetDrawScale(this.scale)
  debugDraw.SetFillAlpha(0.5)
  debugDraw.SetFillAlpha(0.5)
  debugDraw.SetFlags(B2DebugDraw.e_shapeBit)
  debugDraw.AppendFlags(B2DebugDraw.e_jointBit)
  this.world.SetDebugDraw(debugDraw)
  this.world.m_debugDraw.m_sprite.graphics.clear = function () {
    return false
  }
}

PhysicsSystem.prototype.setGravity = function (config) {
  this.world.SetGravity(config)
}

PhysicsSystem.prototype.drawDebugData = function () {
  this.world.DrawDebugData()
}

PhysicsSystem.prototype.addPhysicsComponent = function (config) {
  const physicsComponent = new Harmony.PhysicsComponent(config, this)
  this.components.push(physicsComponent)
  return physicsComponent
}

PhysicsSystem.prototype.update = function () {
  this.world.Step(1 / this.fps, 8, 3)
  this.world.ClearForces()
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.destroyed) {
      this.components.splice(i, 1)
    } else {
      const position = component.getPosition()
      component.owner.transform.x = position.x
      component.owner.transform.y = position.y
      component.owner.transform.angle = component.getAngle()
    }
  }
}

export default PhysicsSystem
