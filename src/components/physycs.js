/* global Box2D */

const Physycs = function (_config) {
  const config = Object.assign({
    name: 'physycs',
    x: 50,
    y: 50,
    type: 'static',
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
    userData: '',
    world: null
  }, _config)

  this.owner = null
  this.name = config.name

  const B2BodyDef = Box2D.Dynamics.b2BodyDef
  const B2Body = Box2D.Dynamics.b2Body
  const scale = 100
  const bodyDef = new B2BodyDef()
  bodyDef.position.x = config.x / scale
  bodyDef.position.y = config.y / scale
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

  this.body = config.world.CreateBody(bodyDef)
}

export default Physycs
