/* global Harmony debug */

const StateScene = new Harmony.Scene({
  create: async (engine) => {
    const entity = engine.entities.add('entity')

    entity.addComponent(engine.transform.addTransformComponent({
      x: 50,
      y: 50
    }))

    entity.addComponent(engine.render.addSpriteComponent({
      image: engine.render.get('question')
    }))

    entity.addComponent(engine.state.addStateComponent({
      current: 'front',
      states: {
        front: {
          enter: (engine, owner) => {
            owner.sprite.image = engine.render.get('a')
          },
          update: (engine, owner) => {
            if (engine.pointers.get(0).start) {
              owner.state.switch('back')
            }
          }
        },
        back: {
          enter: (engine, owner) => {
            owner.sprite.image = engine.render.get('question')
          },
          update: (engine, owner) => {
            if (engine.pointers.get(0).start) {
              owner.state.switch('front')
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
