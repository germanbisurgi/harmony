/* global Harmony debug */

const StateScene = new Harmony.Scene({
  create: async (engine) => {
    const entity = engine.entities.add('entity')

    entity.addComponent(engine.transform.addTransformComponent())

    entity.addComponent(engine.render.addSpriteComponent({
      image: engine.render.get('question'),
      width: 50,
      height: 50
    }))

    entity.addComponent(engine.state.addStateComponent({
      current: 'front',
      states: {
        front: {
          enter: (engine, owner) => {
            owner.sprite.image = engine.render.get('a')
            console.log('front enter')
          },
          update: (engine, owner) => {
            console.log('front update')
            if (engine.pointers.get(0).start) {
              owner.state.switch('back')
            }
          },
          exit: () => {
            console.log('front exit')
          }
        },
        back: {
          enter: (engine, owner) => {
            console.log('back enter')
            owner.sprite.image = engine.render.get('question')
          },
          update: (engine, owner) => {
            console.log('back update')
            if (engine.pointers.get(0).start) {
              owner.state.switch('front')
            }
          },
          exit: () => {
            console.log('back exit')
          }
        }
      }
    }))
  },
  draw: (engine) => {
    debug(engine)
  }
})
