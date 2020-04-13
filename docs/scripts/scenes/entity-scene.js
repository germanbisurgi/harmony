/* global Harmony debug */

const EntityScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add({
      x: 100,
      y: 100
    })

    entity.addComponent(engine.audio.addAudioComponent())

    entity.addComponent(engine.render.addSpriteComponent({
      image: engine.render.get('question'),
      width: 50,
      height: 50
    }))

    entity.addComponent(engine.physics.addPhysicsComponent({
      x: 100,
      y: 100,
      type: 'static'
    }))

    entity.components.physics.addCircle({
      radius: 25,
      density: 10
    })

    entity.addComponent(engine.scripts.addScriptComponent({
      onStart: (engine, entity) => {
        console.log('onStart')
      },
      onUpdate: (engine, entity) => {
        console.log('onUpdate')
      }
    }))

    entity.addComponent(engine.state.addStateComponent({
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
    }))

    console.table(entity)
  },
  update: (engine) => {
    if (engine.keys.get('d').start) {
      engine.entities.cache[0].destroy()
    }
  },
  draw: (engine) => {
    debug(engine)
  }
})
