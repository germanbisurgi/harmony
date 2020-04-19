/* global Harmony debug */

const AudioScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add({
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5
    })

    engine.audio.addAudioComponent(entity)

    engine.render.addSpriteComponent(entity, {
      image: engine.render.get('question')
    })

    engine.state.addStateComponent(entity, {
      current: 'play',
      states: {
        play: {
          update: (engine, entity) => {
            if (engine.pointers.get(0).start) {
              engine.audio.play(entity, 'win')
              entity.components.state.switch('stop')
            }
          }
        },
        stop: {
          update: (engine, entity) => {
            if (engine.pointers.get(0).start) {
              engine.audio.stop(entity)
              entity.components.state.switch('play')
            }
          }
        }
      }
    })

    engine.behaviours.addBehaviourComponent(entity, {
      onStart: (engine, entity) => {},
      onUpdate: (engine, entity) => {
        if (engine.keys.get('d').hold) {
          entity.x += 5
        }
        if (engine.keys.get('a').hold) {
          entity.x += -5
        }
        if (engine.keys.get('s').hold) {
          entity.y += 5
        }
        if (engine.keys.get('w').hold) {
          entity.y += -5
        }
      }
    })
  },
  draw: (engine) => {
    debug(engine)
  }
})
