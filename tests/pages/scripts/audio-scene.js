/* global Harmony debug */

const AudioScene = new Harmony.Scene({
  create: async (engine) => {
    const entity = engine.entities.add('entity')

    entity.addComponent(engine.transform.addTransformComponent({
      x: 50,
      y: 50
    }))

    entity.addComponent(engine.render.addSpriteComponent({
      image: engine.assets.getImage('question')
    }))

    entity.addComponent(engine.audio.addAudioComponent({
      buffer: engine.assets.getBuffer('win')
    }))

    console.log(entity.audio)

    entity.addComponent(engine.state.addStateComponent({
      current: 'play',
      states: {
        play: {
          update: (engine, owner) => {
            if (engine.pointers.get(0).start) {
              owner.audio.play()
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
