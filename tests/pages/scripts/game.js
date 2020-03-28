/* global Harmony */

const global = {}

global.destroy = function (engine) {
  engine.entities.destroy()
  engine.pointers.destroy()
  engine.keys.destroy()
}

const Scene1 = new Harmony.Scene({
  create: async (engine, refs) => {
    refs.imageAngryFace = await engine.assets.addImage({ url: './assets/images/angry-face.png' })
    refs.audioBufferTic = await engine.assets.addAudioBuffer({ url: './assets/audio/tic.mp3' })

    refs.trackTic = engine.audio.add({ buffer: refs.audioBufferTic })

    refs.key1 = engine.keys.add({ key: '1' })
    refs.key2 = engine.keys.add({ key: '2' })

    refs.pointer1 = engine.pointers.add()
    refs.pointer2 = engine.pointers.add()

    refs.entity = engine.entities.add()

    refs.entity.addComponent(engine.transform.addTransformComponent({
      x: 50,
      y: 50,
      angle: 4,
      scale: 1
    }))

    refs.entity.addComponent(engine.render.addSpriteComponent({
      image: refs.imageAngryFace,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
    }))

    refs.entity.addComponent(engine.physics.addPhysicsComponent())

    refs.entity.physics.addCircle({
      offsetX: 0,
      offsetY: 0,
      radius: 50
    })
    console.table(refs)
  },
  update: (engine, refs) => {
    if (refs.key1.start) {
      global.destroy(engine)
      engine.scene.switch(Scene1)
    }

    if (refs.key2.start) {
      global.destroy(engine)
      engine.scene.switch(Scene2)
    }

    if (refs.pointer1.start) {
      refs.trackTic.play()
    }

    if (refs.pointer1.hold) {
      refs.entity.physics.applyForce({
        x: (refs.pointer1.x - refs.pointer1.startX) * 0.1,
        y: (refs.pointer1.y - refs.pointer1.startY) * 0.1
      })
    }

    if (refs.pointer1.start && refs.pointer2.start) {
      refs.entity.physics.setPosition({ x: 100, y: 100 })
      refs.entity.physics.setLinearVelocity({ x: 0, y: 0 })
    }
  }
})

const Scene2 = new Harmony.Scene({
  create: async (engine, refs) => {
    refs.key1 = engine.keys.add({ key: '1' })
    refs.key2 = engine.keys.add({ key: '2' })
    console.table(refs)
  },
  update: (engine, refs) => {
    if (refs.key1.start) {
      global.destroy(engine)
      engine.scene.switch(Scene1)
    }

    if (refs.key2.start) {
      global.destroy(engine)
      engine.scene.switch(Scene2)
    }
  }
})

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(Scene1)

window.onerror = function (msg, url, linenumber) {
  window.alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
  return true
}
