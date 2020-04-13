/* global Harmony debug */

const StateScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add({
      tags: 'blup',
      x: 50,
      y: 50
    })

    entity.addComponent(engine.render.addSpriteComponent({
      image: engine.render.get('question')
    }))

    entity.addComponent(engine.state.addStateComponent({
      current: 'front',
      states: {
        front: {
          enter: (engine, entity) => {
            entity.components.sprite.image = engine.render.get('a')
          },
          update: (engine, entity) => {
            if (engine.pointers.get(0).start) {
              entity.components.state.switch('back')
            }
          }
        },
        back: {
          enter: (engine, entity) => {
            entity.components.sprite.image = engine.render.get('question')
          },
          update: (engine, entity) => {
            if (engine.pointers.get(0).start) {
              entity.components.state.switch('front')
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
