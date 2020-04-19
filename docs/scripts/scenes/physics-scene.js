/* global Harmony debug */

const PhysicsScene = new Harmony.Scene({
  create: (engine) => {
    const staticEdge = engine.entities.add({ tags: ['staticEdge'] })
    engine.physics.addPhysicsComponent(staticEdge, { x: 10, y: 10, type: 'static' })
    engine.physics.addEdge(staticEdge, { ax: 0, ay: 0, bx: window.innerWidth - 20, by: 0 })
    engine.physics.addEdge(staticEdge, { ax: window.innerWidth - 20, ay: 0, bx: window.innerWidth - 20, by: window.innerHeight - 20 })
    engine.physics.addEdge(staticEdge, { ax: window.innerWidth - 20, ay: window.innerHeight - 20, bx: 0, by: window.innerHeight - 20 })
    engine.physics.addEdge(staticEdge, { ax: 0, ay: window.innerHeight - 20, bx: 0, by: 0 })

    const kinematicCircle = engine.entities.add({ tags: ['kinematicCircle'] })
    engine.physics.addPhysicsComponent(kinematicCircle, { x: 200, y: 100, type: 'kinematic' })
    engine.physics.addCircle(kinematicCircle, { radius: 25, density: 10 })
    engine.physics.addCircle(kinematicCircle, { radius: 25, density: 10 })

    const dynamicRectangle = engine.entities.add({ tags: ['dynamicRectangle'] })
    engine.physics.addPhysicsComponent(dynamicRectangle, { x: 200, y: 200, type: 'dynamic' })
    engine.physics.addRectangle(dynamicRectangle, { width: 50, height: 50, density: 10 })

    const dynamicPolygon = engine.entities.add({ tags: ['dynamicPolygon'] })
    engine.physics.addPhysicsComponent(dynamicPolygon, { x: 50, y: 200, type: 'dynamic' })
    engine.physics.addPolygon(dynamicPolygon, {
      x: 0,
      y: 0,
      vertices: [
        { x: 0, y: 0 },
        { x: 50, y: 0 },
        { x: 100, y: 25 },
        { x: 50, y: 50 },
        { x: 0, y: 50 }
      ]
    })

    const dynamicCircle = engine.entities.add({ tags: ['dynamicCircle'] })
    engine.physics.addPhysicsComponent(dynamicCircle, { x: 100, y: 100, type: 'dynamic' })
    engine.physics.addCircle(dynamicCircle, { radius: 25, density: 10 })
    engine.audio.addAudioComponent(dynamicCircle)
    engine.behaviours.addBehaviourComponent(dynamicCircle, {
      onStart: (engine, dynamicCircle) => {
        engine.physics.onContactBegin(dynamicCircle, function (other, me) {
          console.log('onContactBegin', other.tags, me.tags)
          engine.audio.play(dynamicCircle, 'collision')
        })
      },
      onUpdate: (engine, dynamicCircle) => {
        if (engine.pointers.get('1').offsetX > 0) {
          engine.physics.applyForce(dynamicCircle, { x: engine.pointers.get('1').offsetX * 0.1, y: 0 })
        }
        if (engine.pointers.get('1').offsetX < 0) {
          engine.physics.applyForce(dynamicCircle, { x: engine.pointers.get('1').offsetX * 0.1, y: 0 })
        }
        if (engine.pointers.get('1').offsetY < 0) {
          engine.physics.applyForce(dynamicCircle, { x: 0, y: engine.pointers.get('1').offsetY * 0.1 })
        }
        if (engine.pointers.get('1').offsetY > 0) {
          engine.physics.applyForce(dynamicCircle, { x: 0, y: engine.pointers.get('1').offsetY * 0.1 })
        }
      }
    })
  },
  draw: (engine) => {
    debug(engine)
  }
})
