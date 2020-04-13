/* global Harmony debug */

const AudioScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add()

    engine.audio.addAudioComponent(entity)

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
  },
  draw: (engine) => {
    debug(engine)
  }
})
