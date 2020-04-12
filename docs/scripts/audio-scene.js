/* global Harmony debug */

const AudioScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add('entity')

    entity.addComponent(engine.transform.addTransformComponent())

    entity.addComponent(engine.audio.addAudioSourceComponent())

    entity.addComponent(engine.state.addStateComponent({
      current: 'play',
      states: {
        play: {
          update: (engine, owner) => {
            if (engine.pointers.get(0).start) {
              owner.audio.play('win')
              owner.state.switch('stop')
            }
          }
        },
        stop: {
          update: (engine, owner) => {
            if (engine.pointers.get(0).start) {
              owner.audio.stop()
              owner.state.switch('play')
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
