/* global Box2D */

const Physycs = function (params, system) {
  const defaults = {
    name: 'physycs',
    x: 50,
    y: 50,
    type: 'dynamic',
    active: true,
    allowSleep: true,
    awake: true,
    bullet: false,
    fixedRotation: false,
    angle: 0,
    angularDamping: 0,
    angularVelocity: 0,
    linearDamping: 0,
    linearVelocity: { x: 0, y: 0 },
    userData: {}
  }

  const config = Object.assign(defaults, params)

  this.owner = null
  this.name = config.name
  this.system = system
  this.body = null
  this.type = config.type

  const B2BodyDef = Box2D.Dynamics.b2BodyDef
  const B2Body = Box2D.Dynamics.b2Body

  const bodyDef = new B2BodyDef()
  bodyDef.position.x = config.x / this.system.scale
  bodyDef.position.y = config.y / this.system.scale
  bodyDef.active = config.active
  bodyDef.allowSleep = config.allowSleep
  bodyDef.awake = config.awake
  bodyDef.bullet = config.bullet
  bodyDef.fixedRotation = config.fixedRotation
  bodyDef.angle = config.angle
  bodyDef.angularDamping = config.angularDamping
  bodyDef.angularVelocity = config.angularVelocity
  bodyDef.linearDamping = config.linearDamping
  bodyDef.linearVelocity = config.linearVelocity
  bodyDef.userData = config.userData

  if (this.type === 'static') {
    bodyDef.type = B2Body.b2_staticBody
  }

  if (this.type === 'dynamic') {
    bodyDef.type = B2Body.b2_dynamicBody
  }

  if (this.type === 'kinematic') {
    bodyDef.type = B2Body.b2_kinematicBody
  }

  this.body = this.system.world.CreateBody(bodyDef)
}

Physycs.prototype.setLinearVelocity = function (config) {
  this.body.SetAwake(true)
  this.body.SetLinearVelocity({
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  })
}

Physycs.prototype.getPosition = function () {
  const position = this.body.GetPosition()
  return {
    x: position.x * this.system.scale,
    y: position.y * this.system.scale
  }
}

Physycs.prototype.setPosition = function (config) {
  const worldPosition = {
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  }
  this.body.SetPosition(worldPosition)
}

Physycs.prototype.applyForce = function (config) {
  this.body.ApplyForce(config, this.body.GetWorldCenter())
}

Physycs.prototype.getFixtureDef = function (params) {
  const defaults = {
    density: 1,
    friction: 0.5,
    restitution: 0.3,
    isSensor: false
  }
  const config = Object.assign(defaults, params)
  const B2FixtureDef = Box2D.Dynamics.b2FixtureDef
  const fixDef = new B2FixtureDef()
  fixDef.density = config.density
  fixDef.friction = config.friction
  fixDef.restitution = config.restitution
  fixDef.isSensor = config.isSensor
  return fixDef
}

Physycs.prototype.addCircle = function (params) {
  const defaults = {
    offsetX: 0,
    offsetY: 0,
    radius: 25,
    fixtureDefinition: this.getFixtureDef()
  }
  const config = Object.assign(defaults, params)
  const B2CircleShape = Box2D.Collision.Shapes.b2CircleShape
  const fixtureDef = config.fixtureDefinition
  fixtureDef.shape = new B2CircleShape(config.radius / this.system.scale)
  fixtureDef.shape.mp = {
    x: config.offsetX / this.system.scale || 0,
    y: config.offsetY / this.system.scale || 0
  }
  return this.body.CreateFixture(fixtureDef)
}
export default Physycs
