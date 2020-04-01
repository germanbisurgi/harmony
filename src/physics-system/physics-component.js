/* global Box2D */

const PhysicsComponent = function (params, system) {
  const defaults = {
    name: 'physics',
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
  this.destroyed = false
  this.body = null
  this.system = system
  this.fixtures = []
  this.type = config.type
  this.name = config.name

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
  this.body.active = true
  this.body.component = this
}

PhysicsComponent.prototype.setLinearVelocity = function (config) {
  this.body.SetAwake(true)
  this.body.SetLinearVelocity({
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  })
}

PhysicsComponent.prototype.destroy = function () {
  this.fixtures.forEach((fixture) => {
    this.body.DestroyFixture(fixture)
  })
  this.system.world.DestroyBody(this.body)
  this.destroyed = true
}

PhysicsComponent.prototype.getPosition = function () {
  const position = this.body.GetPosition()
  return {
    x: position.x * this.system.scale,
    y: position.y * this.system.scale
  }
}

PhysicsComponent.prototype.getAngle = function () {
  return this.body.GetAngle()
}

PhysicsComponent.prototype.setPosition = function (config) {
  this.body.SetPosition({
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  })
}

PhysicsComponent.prototype.applyForce = function (config) {
  this.body.ApplyForce(config, this.body.GetWorldCenter())
}

PhysicsComponent.prototype.getFixtureDef = function (config) {
  const B2FixtureDef = Box2D.Dynamics.b2FixtureDef
  const fixDef = new B2FixtureDef()
  fixDef.density = config.density
  fixDef.friction = config.friction
  fixDef.restitution = config.restitution
  fixDef.isSensor = config.isSensor
  return fixDef
}

PhysicsComponent.prototype.addCircle = function (params) {
  const defaults = {
    x: 0,
    y: 0,
    radius: 25,
    density: 1,
    friction: 0.5,
    restitution: 0.3,
    isSensor: false
  }
  const config = Object.assign(defaults, params)
  const fixtureDefinition = this.getFixtureDef(config)
  const B2CircleShape = Box2D.Collision.Shapes.b2CircleShape
  const fixtureDef = fixtureDefinition
  fixtureDef.shape = new B2CircleShape(config.radius / this.system.scale)
  fixtureDef.shape.m_p = {
    x: config.x / this.system.scale,
    y: config.y / this.system.scale
  }
  const fixture = this.body.CreateFixture(fixtureDef)
  this.fixtures.push(fixture)
  return fixture
}

PhysicsComponent.prototype.onContactBegin = function (me, other) {}

PhysicsComponent.prototype.onContactEnd = function (me, other) {}

PhysicsComponent.prototype.onContactPreSolve = function (me, other) {}

PhysicsComponent.prototype.onContactPostSolve = function (me, other) {}

export default PhysicsComponent
