/* global Harmony debug */

const InputsScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add('something')
    entity.addComponent(engine.transform.addTransformComponent())

    entity.addComponent(engine.physics.addPhysicsComponent())

    entity.addComponent(engine.audio.addAudioSourceComponent())

    entity.addComponent(engine.render.addSpriteComponent({
      image: engine.render.get('question'),
      width: 50,
      height: 50
    }))

    entity.addComponent(engine.scripts.addScriptComponent({
      update: () => {
        if (engine.keys.get('1').start) {
          console.log('start')
        }
        if (engine.keys.get('1').hold) {
          console.log('hold', engine.keys.get('1').holdTime)
        }
        if (engine.keys.get('1').end) {
          console.log('end')
        }
        if (engine.pointers.get('1').start) {
          console.log('start')
        }
        if (engine.pointers.get('1').hold) {
          console.log('hold', engine.pointers.get('1').holdTime)
        }
        if (engine.pointers.get('1').end) {
          console.log('end')
        }
      }
    }))
  },
  draw: (engine) => {
    debug(engine)
  }
})
