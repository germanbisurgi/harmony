/* global Harmony */

const global = {}

global.destroy = function (engine) {
  engine.entities.destroy()
  engine.pointers.destroy()
  engine.keys.destroy()
}

const my = {}

const Scene1 = new Harmony.Scene({
  create: async (engine) => {
    console.log('scene1')

    my.imageAngryFace = await engine.assets.addImage({ url: './assets/images/angry-face.png' })
    my.audioBufferTic = await engine.assets.addAudioBuffer({ url: './assets/audio/tic.mp3' })

    my.trackTic = engine.audio.add({ buffer: my.audioBufferTic })

    my.key1 = engine.keys.add({ key: '1' })
    my.key2 = engine.keys.add({ key: '2' })
    my.keyT = engine.keys.add({ key: 't' })

    my.pointer1 = engine.pointers.add()
    my.pointer2 = engine.pointers.add()

    my.entity = engine.entities.add()

    my.entity.addComponent(engine.transform.addTransformComponent({
      x: 50,
      y: 50,
      angle: 4,
      scale: 1
    }))

    my.entity.addComponent(engine.render.addSpriteComponent({
      image: my.imageAngryFace,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
    }))

    my.entity.addComponent(engine.physics.addPhysicsComponent())

    my.entity.physics.addCircle({
      offsetX: 0,
      offsetY: 0,
      radius: 50
    })
  },
  update: (engine) => {
    if (my.key1.start) {
      global.destroy(engine)
      engine.scene.switch(Scene1)
    }

    if (my.key2.start) {
      global.destroy(engine)
      engine.scene.switch(Scene2)
    }

    if (my.pointer1.start) {
      my.trackTic.play()
    }

    if (my.pointer1.hold) {
      my.entity.physics.applyForce({
        x: (my.pointer1.x - my.pointer1.startX) * 0.1,
        y: (my.pointer1.y - my.pointer1.startY) * 0.1
      })
    }

    if (my.pointer1.start && my.pointer2.start) {
      my.entity.physics.setPosition({ x: 100, y: 100 })
      my.entity.physics.setLinearVelocity({ x: 0, y: 0 })
    }
  }
})

const myother = {}

const Scene2 = new Harmony.Scene({
  create: async (engine) => {
    console.log('scene2')
    myother.key1 = engine.keys.add({ key: '1' })
    myother.key2 = engine.keys.add({ key: '2' })
  },
  update: (engine) => {
    if (myother.key1.start) {
      global.destroy(engine)
      engine.scene.switch(Scene1)
    }

    if (myother.key2.start) {
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
