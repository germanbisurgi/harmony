/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupState = new Harmony.State('setup', {
  preload: async (engine) => {
    console.log('preload')
    engine.jsonTest = await engine.assets.addJSON({ url: './assets/json/test.json' })
    engine.audioCoin = await engine.assets.addAudio({ url: './assets/audio/coin.wav' })
    engine.imageAngryFace = await engine.assets.addImage({ url: './assets/images/angry-face.png' })
    engine.audioBufferTic = await engine.assets.addAudioBuffer({ url: './assets/audio/tic.mp3' })
  },
  create: (engine) => {
    console.log('create')

    // ------------------------------------------------------------------ assets

    engine.trackTic = engine.audio.add({ buffer: engine.audioBufferTic })

    // -------------------------------------------------------------------- keys

    engine.c = engine.keys.add({ key: 'c' })
    engine.w = engine.keys.add({ key: 'w' })
    engine.a = engine.keys.add({ key: 'a' })
    engine.s = engine.keys.add({ key: 's' })
    engine.d = engine.keys.add({ key: 'd' })
    engine.q = engine.keys.add({ key: 'q' })
    engine.e = engine.keys.add({ key: 'e' })
    engine.y = engine.keys.add({ key: 'y' })
    engine.x = engine.keys.add({ key: 'x' })
    engine.z = engine.keys.add({ key: 'z' })
    engine.g = engine.keys.add({ key: 'g' })
    engine.h = engine.keys.add({ key: 'h' })
    engine.j = engine.keys.add({ key: 'j' })

    // ---------------------------------------------------------------- pointers

    engine.pointer1 = engine.pointers.add()
    engine.pointer2 = engine.pointers.add()

    // ----------------------------------------------------------------- physycs

    engine.physycs.setGravity({ x: 0, y: 0 })

    // ---------------------------------------------------------------- entities

    engine.entity = engine.entities.add({
      x: 50,
      y: 50,
      angle: 4,
      scale: 1
    })

    engine.entity.addComponent(engine.render.addRenderComponent({
      image: engine.imageAngryFace,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
    }))

    engine.entity.addComponent(engine.physycs.addPhysycsComponent())
    engine.entity.physycs.addCircle({ offsetX: 0, offsetY: 0, radius: 50 })

    engine.entities.add(engine.entity)

    console.table(engine.entity)
  },
  update: (engine) => {
    // -------------------------------------------------------------------- keys

    if (engine.z.hold) {
      engine.entity.physycs.applyForce({ x: 0, y: -2 })
    }
    if (engine.g.hold) {
      engine.entity.physycs.applyForce({ x: -2, y: 0 })
    }
    if (engine.h.hold) {
      engine.entity.physycs.applyForce({ x: 0, y: 2 })
    }
    if (engine.j.hold) {
      engine.entity.physycs.applyForce({ x: 2, y: 0 })
    }

    if (engine.w.hold) {
      engine.entity.transform.y += -5
    }
    if (engine.a.hold) {
      engine.entity.transform.x -= 5
    }
    if (engine.s.hold) {
      engine.entity.transform.y += 5
    }
    if (engine.d.hold) {
      engine.entity.transform.x += 5
    }
    if (engine.q.hold) {
      engine.entity.transform.angle -= 0.1
    }
    if (engine.e.hold) {
      engine.entity.transform.angle += 0.1
    }
    if (engine.y.hold) {
      engine.entity.transform.scale -= 0.1
    }
    if (engine.x.hold) {
      engine.entity.transform.scale += 0.1
    }

    if (engine.c.start) {
      engine.audioCoin.currentTime = 0.1
      engine.audioCoin.play()
    }

    // ---------------------------------------------------------------- pointers

    if (engine.pointer1.start || engine.pointer2.start) {
      engine.entity.physycs.setPosition({ x: engine.pointer1.x, y: engine.pointer1.y })

      console.log('audioCtx.state', audioCtx.state)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume()
      }
      engine.trackTic.play()
    }

    if (engine.pointer1.hold) {
      engine.entity.transform.x = engine.pointer1.x
      engine.entity.transform.y = engine.pointer1.y
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
engine.state.add(setupState)
engine.state.switch('setup')

const AudioContext = window.AudioContext || window.webkitAudioContext
window.audioCtx = new AudioContext({
  latencyHint: 'interactive'
})

window.onerror = function (msg, url, linenumber) {
  alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
  return true
}
