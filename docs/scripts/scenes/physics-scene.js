/* global Harmony debug */

const PhysicsScene = new Harmony.Scene({
  create: (engine) => {
    const kinematic = engine.entities.add({ tags: ['kinematic'] })
    engine.physics.addPhysicsComponent(kinematic, { x: 200, y: 100, type: 'kinematic' })
    engine.physics.addCircle(kinematic, { radius: 25, density: 10 })

    const dynamic = engine.entities.add({ tags: ['dynamic'] })
    engine.physics.addPhysicsComponent(dynamic, { x: 100, y: 100, type: 'dynamic' })
    engine.physics.addCircle(dynamic, { radius: 25, density: 10 })
    engine.scripts.addScriptComponent(dynamic, {
      onStart: (engine, dynamic) => {
        engine.physics.onContactBegin(dynamic, function (other, me) {
          console.log('onContactBegin', other.tags, me.tags)
        })
        engine.physics.onContactEnd(dynamic, function (other, me) {
          console.log('onContactEnd', other.tags, me.tags)
        })
        engine.physics.onContactPreSolve(dynamic, function (other, me) {
          console.log('onContactPreSolve', other.tags, me.tags)
        })
        engine.physics.onContactPostSolve(dynamic, function (other, me) {
          console.log('onContactPostSolve', other.tags, me.tags)
        })
      },
      onUpdate: (engine, dynamic) => {
        if (engine.keys.get('d').hold) {
          engine.physics.applyForce(dynamic, { x: 5, y: 0 })
        }
        if (engine.keys.get('a').hold) {
          engine.physics.applyForce(dynamic, { x: -5, y: 0 })
        }
        if (engine.keys.get('w').hold) {
          engine.physics.applyForce(dynamic, { x: 0, y: -5 })
        }
        if (engine.keys.get('s').hold) {
          engine.physics.applyForce(dynamic, { x: 0, y: 5 })
        }
      }
    })
  },
  draw: (engine) => {
    debug(engine)
  }
})
