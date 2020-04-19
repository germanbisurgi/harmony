/* global Harmony debug */

const PhysicsScene = new Harmony.Scene({
  create: (engine) => {
    const edge = engine.entities.add({ tags: ['edge'] })
    engine.physics.addPhysicsComponent(edge, { x: 10, y: 10, type: 'static' })
    engine.physics.addEdge(edge, { ax: 0, ay: 0, bx: window.innerWidth - 20, by: 0 })
    engine.physics.addEdge(edge, { ax: window.innerWidth - 20, ay: 0, bx: window.innerWidth - 20, by: window.innerHeight -20 })
    engine.physics.addEdge(edge, { ax: window.innerWidth - 20, ay: window.innerHeight - 20, bx: 0, by: window.innerHeight - 20 })
    engine.physics.addEdge(edge, { ax: 0, ay: window.innerHeight - 20, bx: 0, by: 0 })

    const kinematic = engine.entities.add({ tags: ['kinematic'] })
    engine.physics.addPhysicsComponent(kinematic, { x: 200, y: 100, type: 'kinematic' })
    engine.physics.addCircle(kinematic, { radius: 25, density: 10 })

    const dynamic = engine.entities.add({ tags: ['dynamic'] })
    engine.physics.addPhysicsComponent(dynamic, { x: 100, y: 100, type: 'dynamic' })
    engine.physics.addCircle(dynamic, { radius: 25, density: 10 })
    engine.audio.addAudioComponent(dynamic)
    engine.behaviours.addBehaviourComponent(dynamic, {
      onStart: (engine, dynamic) => {
        engine.physics.onContactBegin(dynamic, function (other, me) {
          console.log('onContactBegin', other.tags, me.tags)
          engine.audio.play(dynamic, 'collision')
        })
        engine.physics.onContactEnd(dynamic, function (other, me) {
          console.log('onContactEnd', other.tags, me.tags)
        })
      },
      onUpdate: (engine, dynamic) => {
        if (engine.pointers.get('1').offsetX > 0) {
          engine.physics.applyForce(dynamic, { x: 5, y: 0 })
        }
        if (engine.pointers.get('1').offsetX < 0) {
          engine.physics.applyForce(dynamic, { x: -5, y: 0 })
        }
        if (engine.pointers.get('1').offsetY < 0) {
          engine.physics.applyForce(dynamic, { x: 0, y: -5 })
        }
        if (engine.pointers.get('1').offsetY > 0) {
          engine.physics.applyForce(dynamic, { x: 0, y: 5 })
        }
      }
    })
  },
  draw: (engine) => {
    debug(engine)
  }
})
