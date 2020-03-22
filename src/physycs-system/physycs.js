/* global Box2D */

const Physycs = function (params, world, scale) {
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
  this.scale = scale
  this.body = null
  this.type = config.type

  const B2BodyDef = Box2D.Dynamics.b2BodyDef
  const B2Body = Box2D.Dynamics.b2Body

  const bodyDef = new B2BodyDef()
  bodyDef.position.x = config.x / this.scale
  bodyDef.position.y = config.y / this.scale
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

  this.body = world.CreateBody(bodyDef)
}

Physycs.prototype.setLinearVelocity = function (config) {
  this.body.SetAwake(true)
  this.body.SetLinearVelocity({
    x: config.x / this.scale,
    y: config.y / this.scale
  })
}

Physycs.prototype.setPosition = function (config) {
  this.body.SetPosition(config)
}

Physycs.prototype.applyForce = function (config) {
  this.body.ApplyForce(config, this.body.GetWorldCenter())
}

Physycs.prototype.getFixtureDef = function (fixtureDefinition) {
  const B2FixtureDef = Box2D.Dynamics.b2FixtureDef
  fixtureDefinition = fixtureDefinition || {}
  const fixDef = new B2FixtureDef()
  fixDef.density = fixtureDefinition.density || fixtureDefinition.density === 0 ? fixtureDefinition.density : 1
  fixDef.friction = fixtureDefinition.friction || fixtureDefinition.friction === 0 ? fixtureDefinition.friction : 0.5
  fixDef.restitution = fixtureDefinition.restitution || fixtureDefinition.restitution === 0 ? fixtureDefinition.restitution : 0.3
  fixDef.isSensor = fixtureDefinition.isSensor ? fixtureDefinition.isSensor : false
  return fixDef
}

Physycs.prototype.addCircle = function (offsetX, offsetY, radius, fixtureDefinition) {
  const B2CircleShape = Box2D.Collision.Shapes.b2CircleShape
  const fixtureDef = this.getFixtureDef(fixtureDefinition)
  fixtureDef.shape = new B2CircleShape(radius / this.scale)
  fixtureDef.shape.mp = {
    x: offsetX / this.scale || 0,
    y: offsetY / this.scale || 0
  }
  return this.body.CreateFixture(fixtureDef)
}
export default Physycs
