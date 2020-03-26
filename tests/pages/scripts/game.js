/* global Harmony */

const my = {}

const setupState = new Harmony.Scene({
  create: async (engine) => {
    // ------------------------------------------------------------------ assets

    my.jsonTest = await engine.assets.addJSON({ url: './assets/json/test.json' })
    my.audioCoin = await engine.assets.addAudio({ url: './assets/audio/coin.wav' })
    my.imageAngryFace = await engine.assets.addImage({ url: './assets/images/angry-face.png' })
    my.audioBufferTic = await engine.assets.addAudioBuffer({ url: './assets/audio/tic.mp3' })

    my.trackTic = engine.audio.add({ buffer: my.audioBufferTic })

    // -------------------------------------------------------------------- keys

    my.keyA = engine.keys.add({ key: 'a' })
    my.keyC = engine.keys.add({ key: 'c' })
    my.keyD = engine.keys.add({ key: 'd' })
    my.keyE = engine.keys.add({ key: 'e' })
    my.keyW = engine.keys.add({ key: 'w' })
    my.keyQ = engine.keys.add({ key: 'q' })
    my.keyS = engine.keys.add({ key: 's' })
    my.keyX = engine.keys.add({ key: 'x' })
    my.keyY = engine.keys.add({ key: 'y' })
    my.keySpace = engine.keys.add({ key: ' ' })

    // ---------------------------------------------------------------- pointers

    my.pointer1 = engine.pointers.add()

    // ----------------------------------------------------------------- physics

    engine.physics.setGravity({ x: 0, y: 0 })

    // ---------------------------------------------------------------- entities

    my.entityNormal = engine.entities.add({
      x: 200,
      y: 200,
      angle: 4,
      scale: 2
    })

    my.entityNormal.addComponent(engine.render.addSpriteComponent({
      image: my.imageAngryFace,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
    }))

    my.entityPhysics = engine.entities.add({
      x: 50,
      y: 50,
      angle: 4,
      scale: 1
    })

    my.entityPhysics.addComponent(engine.render.addSpriteComponent({
      image: my.imageAngryFace,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
    }))

    my.entityPhysics.addComponent(engine.physics.addPhysicsComponent())

    my.entityPhysics.physics.addCircle({
      offsetX: 0,
      offsetY: 0,
      radius: 50
    })

    console.table(my)
  },
  update: (engine) => {
    // -------------------------------------------------------------------- keys

    // console.log(my.keySpace)

    if (my.keySpace.start) {
      console.log('start')
    }

    if (my.keySpace.hold) {
      console.log('hold')
    }

    if (my.keySpace.end) {
      console.log('end')
    }

    if (my.keyW.hold) {
      my.entityNormal.transform.y += -5
    }
    if (my.keyA.hold) {
      my.entityNormal.transform.x -= 5
    }
    if (my.keyS.hold) {
      my.entityNormal.transform.y += 5
    }
    if (my.keyD.hold) {
      my.entityNormal.transform.x += 5
    }
    if (my.keyQ.hold) {
      my.entityNormal.transform.angle -= 0.1
    }
    if (my.keyE.hold) {
      my.entityNormal.transform.angle += 0.1
    }
    if (my.keyY.hold) {
      my.entityNormal.transform.scale -= 0.1
    }
    if (my.keyX.hold) {
      my.entityNormal.transform.scale += 0.1
    }

    if (my.keyC.start) {
      my.audioCoin.currentTime = 0.1
      my.audioCoin.play()
    }

    // ---------------------------------------------------------------- pointers

    if (my.pointer1.start) {
      my.entityNormal.transform.x = my.pointer1.x
      my.entityNormal.transform.y = my.pointer1.y
      my.trackTic.play()
    }

    if (my.pointer1.hold) {
      my.entityPhysics.physics.applyForce({
        x: (my.pointer1.x - my.pointer1.startX) * 0.1,
        y: (my.pointer1.y - my.pointer1.startY) * 0.1
      })
    }
  },
  draw: (engine) => {
    engine.render.context.save()
    engine.render.context.fillStyle = '#00ff00'
    engine.render.context.strokeStyle = '#00ff00'
    engine.render.context.font = '12px Arial'
    engine.render.context.lineWidth = '1'
    engine.render.context.textAlign = 'center'

    engine.render.text({ text: 'FPS: ' + Math.round(1000 / engine.loop.delta), x: 200, y: 20 })

    engine.pointers.cache.forEach(function (pointer) {
      if (pointer.hold) {
        engine.render.circle({
          x: pointer.startX,
          y: pointer.startY,
          radius: 60
        })

        engine.render.circle({
          x: pointer.x,
          y: pointer.y,
          radius: 30
        })

        engine.render.text({
          text: 'id: ' + pointer.id,
          x: pointer.startX,
          y: pointer.startY - 115
        })

        engine.render.text({
          text: 'startX: ' + pointer.startX + ', startY: ' + pointer.startY,
          x: pointer.startX,
          y: pointer.startY - 100
        })

        engine.render.text({
          text: 'currentX: ' + pointer.x + ', currentY: ' + pointer.y,
          x: pointer.startX,
          y: pointer.startY - 85
        })

        engine.render.text({
          text: 'offsetX: ' + (pointer.x - pointer.startX) + ', offsetY: ' + (pointer.y - pointer.startY),
          x: pointer.startX,
          y: pointer.startY - 70
        })

        engine.render.line({
          ax: pointer.startX,
          ay: pointer.startY,
          bx: pointer.x,
          by: pointer.y
        })

        engine.render.rect({
          x: pointer.startX,
          y: pointer.startY,
          width: pointer.x - pointer.startX,
          height: pointer.y - pointer.startY
        })
      }
    })
    engine.render.context.restore()
  }
})

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.add(setupState)
engine.scene.switch(setupState)

window.onerror = function (msg, url, linenumber) {
  window.alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
  return true
}
