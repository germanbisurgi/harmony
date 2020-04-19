/* global Box2D Harmony */

const PhysicsSystem = function (canvas) {
  const B2World = Box2D.Dynamics.b2World
  const B2Vec2 = Box2D.Common.Math.b2Vec2
  const B2DebugDraw = Box2D.Dynamics.b2DebugDraw
  const B2ContactListener = Box2D.Dynamics.b2ContactListener

  this.fps = 60
  this.scale = 100
  this.components = []
  this.context = canvas.getContext('2d')
  this.world = new B2World(new B2Vec2(0, 0), true)
  this.contacts = new B2ContactListener()
  this.physicsComponentName = 'physics'

  // ------------------------------------------------------------------ contacts

  this.world.SetContactListener(this.contacts)

  this.contacts.BeginContact = function (contact) {
    const componentA = contact.GetFixtureA().GetBody().GetUserData()
    const componentB = contact.GetFixtureB().GetBody().GetUserData()
    const entityA = componentA.entity
    const entityB = componentB.entity
    if (componentA.onContactBegin) {
      componentA.onContactBegin(entityB, entityA)
    }
    if (componentB.onContactBegin) {
      componentB.onContactBegin(entityA, entityB)
    }
  }

  this.contacts.EndContact = function (contact) {
    const componentA = contact.GetFixtureA().GetBody().GetUserData()
    const componentB = contact.GetFixtureB().GetBody().GetUserData()
    const entityA = componentA.entity
    const entityB = componentB.entity
    if (componentA.onContactEnd) {
      componentA.onContactEnd(entityB, entityA)
    }
    if (componentB.onContactEnd) {
      componentB.onContactEnd(entityA, entityB)
    }
  }

  this.contacts.PreSolve = function (contact) {
    const componentA = contact.GetFixtureA().GetBody().GetUserData()
    const componentB = contact.GetFixtureB().GetBody().GetUserData()
    const entityA = componentA.entity
    const entityB = componentB.entity
    if (componentA.onContactPreSolve) {
      componentA.onContactPreSolve(entityB, entityA)
    }
    if (componentB.onContactPreSolve) {
      componentB.onContactPreSolve(entityA, entityB)
    }
  }

  this.contacts.PostSolve = function (contact) {
    const componentA = contact.GetFixtureA().GetBody().GetUserData()
    const componentB = contact.GetFixtureB().GetBody().GetUserData()
    const entityA = componentA.entity
    const entityB = componentB.entity
    if (componentA.onContactPostSolve) {
      componentA.onContactPostSolve(entityB, entityA)
    }
    if (componentB.onContactPostSolve) {
      componentB.onContactPostSolve(entityA, entityB)
    }
  }

  // --------------------------------------------------------------------- debug

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

PhysicsSystem.prototype.onContactBegin = function (entity, callback) {
  const component = this.getComponent(entity)
  component.onContactBegin = callback
}

PhysicsSystem.prototype.onContactEnd = function (entity, callback) {
  const component = this.getComponent(entity)
  component.onContactEnd = callback
}

PhysicsSystem.prototype.onContactPreSolve = function (entity, callback) {
  const component = this.getComponent(entity)
  component.onContactPreSolve = callback
}

PhysicsSystem.prototype.onContactPostSolve = function (entity, callback) {
  const component = this.getComponent(entity)
  component.onContactPostSolve = callback
}

PhysicsSystem.prototype.setGravity = function (config) {
  this.world.SetGravity(config)
}

PhysicsSystem.prototype.drawDebugData = function () {
  this.world.DrawDebugData()
}

// ------------------------------------------------------------------- component

PhysicsSystem.prototype.addPhysicsComponent = function (entity, params) {
  const component = new Harmony.PhysicsComponent(this)
  component.body = this.createBody(params)
  component.body.SetUserData(component)
  component.entity = entity
  entity.components[this.physicsComponentName] = component
  this.components.push(component)
}

PhysicsSystem.prototype.getFixtureDef = function (config) {
  const B2FixtureDef = Box2D.Dynamics.b2FixtureDef
  const fixDef = new B2FixtureDef()
  fixDef.density = config.density
  fixDef.friction = config.friction
  fixDef.restitution = config.restitution
  fixDef.isSensor = config.isSensor
  return fixDef
}

PhysicsSystem.prototype.addPolygon = function (entity, params) {
  const defaults = {
    vertices: [],
    x: 0,
    y: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  }
  const config = Object.assign(defaults, params)
  const fixtureDef = this.getFixtureDef(config)
  const B2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
  fixtureDef.shape = new B2PolygonShape()
  for (let i = 0; i < config.vertices.length; i++) {
    const vert = config.vertices[i]
    vert.x /= this.scale
    vert.y /= this.scale
  }
  fixtureDef.shape.SetAsArray(config.vertices, config.vertices.length)
  for (let i = 0; i < fixtureDef.shape.m_vertices.length; i++) {
    const vert = fixtureDef.shape.m_vertices[i]
    vert.x += config.x / this.scale || 0
    vert.y += config.y / this.scale || 0
  }
  const fixture = this.getComponent(entity).body.CreateFixture(fixtureDef)
  this.getComponent(entity).fixtures.push(fixture)
}

PhysicsSystem.prototype.addRectangle = function (entity, params) {
  const defaults = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  }
  const config = Object.assign(defaults, params)
  const fixtureDef = this.getFixtureDef(config)

  const B2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
  fixtureDef.shape = new B2PolygonShape()
  fixtureDef.shape.SetAsBox(
    config.width * 0.5 / this.scale,
    config.height * 0.5 / this.scale
  )
  for (let i = 0; i < fixtureDef.shape.m_vertices.length; i++) {
    const vert = fixtureDef.shape.m_vertices[i]
    vert.x += config.x / this.scale || 0
    vert.y += config.y / this.scale || 0
  }
  fixtureDef.shape.m_centroid.x += config.x / this.scale || 0
  fixtureDef.shape.m_centroid.y += config.y / this.scale || 0

  const fixture = this.getComponent(entity).body.CreateFixture(fixtureDef)
  this.getComponent(entity).fixtures.push(fixture)
}

PhysicsSystem.prototype.addCircle = function (entity, params) {
  const defaults = {
    x: 0,
    y: 0,
    radius: 25,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  }
  const config = Object.assign(defaults, params)
  const fixtureDefinition = this.getFixtureDef(config)
  const B2CircleShape = Box2D.Collision.Shapes.b2CircleShape
  const fixtureDef = fixtureDefinition
  fixtureDef.shape = new B2CircleShape(config.radius / this.scale)
  fixtureDef.shape.m_p = {
    x: config.x / this.scale,
    y: config.y / this.scale
  }
  const fixture = this.getComponent(entity).body.CreateFixture(fixtureDef)
  this.getComponent(entity).fixtures.push(fixture)
}

PhysicsSystem.prototype.addEdge = function (entity, params) {
  const defaults = {
    ax: 0,
    ay: 0,
    bx: 0,
    by: 0,
    density: 1,
    friction: 0.5,
    restitution: 0.5,
    isSensor: false
  }
  const config = Object.assign(defaults, params)
  const fixtureDef = this.getFixtureDef(config)
  const B2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
  fixtureDef.shape = new B2PolygonShape()
  config.ax /= this.scale
  config.ay /= this.scale
  config.bx /= this.scale
  config.by /= this.scale
  fixtureDef.shape.SetAsEdge({ x: config.ax, y: config.ay }, { x: config.bx, y: config.by })
  const fixture = this.getComponent(entity).body.CreateFixture(fixtureDef)
  this.getComponent(entity).fixtures.push(fixture)
}

PhysicsSystem.prototype.createBody = function (params) {
  const defaults = {
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

  if (config.type === 'static') {
    bodyDef.type = B2Body.b2_staticBody
  }

  if (config.type === 'dynamic') {
    bodyDef.type = B2Body.b2_dynamicBody
  }

  if (config.type === 'kinematic') {
    bodyDef.type = B2Body.b2_kinematicBody
  }

  const body = this.world.CreateBody(bodyDef)
  body.active = true

  return body
}

PhysicsSystem.prototype.update = function () {
  this.world.Step(1 / this.fps, 8, 3)
  this.world.ClearForces()
  for (let i = this.components.length; i--;) {
    const component = this.components[i]
    if (component.mustDestroy) {
      this.components.splice(i, 1)
    } else {
      const entity = component.entity
      const position = this.getPosition(entity)
      entity.x = position.x
      entity.y = position.y
      entity.angle = this.getAngle(entity)
    }
  }
}

PhysicsSystem.prototype.getComponent = function (entity) {
  return entity.components[this.physicsComponentName]
}

PhysicsSystem.prototype.destroyComponent = function (entity) {
  this.getComponent(entity).fixtures.forEach((fixture) => {
    this.getComponent(entity).body.DestroyFixture(fixture)
  })
  this.getComponent(entity).system.world.DestroyBody(this.getComponent(entity).body)
  this.getComponent(entity).mustDestroy = true
  this.getComponent(entity).mustDestroy = true
}

PhysicsSystem.prototype.applyForce = function (entity, config) {
  this.getComponent(entity).body.ApplyForce(config, this.getComponent(entity).body.GetWorldCenter())
}

PhysicsSystem.prototype.setPosition = function (entity, config) {
  this.getComponent(entity).body.SetPosition({
    x: config.x / this.scale,
    y: config.y / this.scale
  })
}

PhysicsSystem.prototype.getLinearVelocity = function (entity) {
  const velocity = this.getComponent(entity).body.GetLinearVelocity()
  return {
    x: velocity.x * this.scale,
    y: velocity.y * this.scale
  }
}

PhysicsSystem.prototype.setLinearVelocity = function (entity, config) {
  this.getComponent(entity).body.SetAwake(true)
  this.getComponent(entity).body.SetLinearVelocity({
    x: config.x / this.scale,
    y: config.y / this.scale
  })
}

PhysicsSystem.prototype.getPosition = function (entity) {
  const position = this.getComponent(entity).body.GetPosition()
  return {
    x: position.x * this.scale,
    y: position.y * this.scale
  }
}

PhysicsSystem.prototype.getAngle = function (entity) {
  return this.getComponent(entity).body.GetAngle()
}

export default PhysicsSystem
