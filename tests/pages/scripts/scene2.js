/* global Harmony debug */

const Scene2 = new Harmony.Scene({
  create: async (engine) => {
    document.querySelector('#loading').classList.remove('hidden')

    await engine.render.loadSprite({ name: 'question', url: './assets/images/question.png' })
    await engine.audio.loadClip({ name: 'correct', url: './assets/audio/correct.wav' })
    await engine.audio.loadClip({ name: 'win', url: './assets/audio/win.wav' })

    document.querySelector('#loading').classList.add('hidden')

    const entity = engine.entities.add('something')
    entity.addComponent(engine.transform.addTransformComponent())
    entity.addComponent(engine.physics.addPhysicsComponent())
    entity.addComponent(engine.audio.addAudioSourceComponent())
    entity.addComponent(engine.render.addSpriteComponent({ sprite: engine.render.get('question'), width: 50, height: 50 }))
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
