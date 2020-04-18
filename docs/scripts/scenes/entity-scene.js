/* global Harmony debug */

const EntityScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add({
      tags: ['player', 'soldier'],
      x: 100,
      y: 100
    })

    console.log(engine.entities.hasTag(entity, 'player'))
    console.log(engine.entities.hasTag(entity, 'soldier'))
    console.log(engine.entities.hasTag(entity, 'enemy'))

    engine.audio.addAudioComponent(entity)

    engine.render.addSpriteComponent(entity, {
      image: engine.render.get('question'),
      width: 50,
      height: 50
    })

    engine.physics.addPhysicsComponent(entity, {
      x: 100,
      y: 100
    })

    engine.physics.addCircle(entity, {
      radius: 25,
      density: 10
    })

    engine.scripts.addScriptComponent(entity, {
      onStart: (engine, entity) => {},
      onUpdate: (engine, entity) => {}
    })

    engine.state.addStateComponent(entity, {
      current: 'on',
      states: {
        on: {
          enter: (engine, entity) => {},
          update: (engine, entity) => {},
          exit: (engine, entity) => {}
        },
        off: {
          enter: (engine, entity) => {},
          update: (engine, entity) => {},
          exit: (engine, entity) => {}
        }
      }
    })

    console.table(entity.components.physics)
  },
  update: (engine) => {
    if (engine.keys.get('d').start) {
      engine.entities.destroy(engine.entities.cache[0])
    }
  },
  draw: (engine) => {
    debug(engine)
  }
})
