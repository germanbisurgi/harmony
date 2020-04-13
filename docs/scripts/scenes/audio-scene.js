/* global Harmony debug */

const AudioScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add()
    entity.addComponent(engine.audio.addAudioComponent())
    entity.addComponent(engine.state.addStateComponent({
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
    }))
  },
  draw: (engine) => {
    debug(engine)
  }
})
