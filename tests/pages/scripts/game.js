/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupState = new Harmony.State('setup', {
  preload: (engine) => {
    engine.assets.addImage({ name: 'image-angry-face', url: './assets/images/angry-face.png' })
    engine.assets.addAudio({ name: 'audio-coin', url: './assets/audio/coin.wav' })
    engine.assets.addAudioBuffer({ name: 'audio-buffer-tic', url: './assets/audio/tic.mp3' })
    engine.assets.addJSON({ name: 'json-test', url: './assets/json/test.json' })
  },
  create: (engine) => {
    // ------------------------------------------------------------------ assets

    engine.imageAngryFace = engine.assets.getImage('image-angry-face')
    engine.audioCoin = engine.assets.getAudio('audio-coin')
    engine.trackTic = new Harmony.Track(engine.assets.getAudioBuffer('audio-buffer-tic'))

    engine.trackTic = engine.audio.add({ buffer: engine.assets.getAudioBuffer('audio-buffer-tic') })

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

    // ---------------------------------------------------------------- pointers

    engine.pointer1 = engine.pointers.add()
    engine.pointer2 = engine.pointers.add()

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
    engine.entity.physycs.addCircle(0, 0, 50)

    engine.entities.add(engine.entity)

    console.table(engine.entity)
  },
  update: (engine) => {
    engine.entity.physycs.applyForce({ x: 2, y: 0 })
    // engine.entity.physycs.setPosition({ x: 2, y: 0 })
    // engine.entity.physycs.setLinearVelocity({ x: 2, y: 0 })
    // console.log(engine.entity.physycs.body.GetPosition())
    console.log(engine.entity.physycs.body)
    // -------------------------------------------------------------------- keys

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
      console.log('audioCtx.state', audioCtx.state)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume()
      }

      // audio buffer WAA
      engine.trackTic.play()

      // Audio
      // engine.audioCoin.currentTime = 0.0
      // engine.audioCoin.play()
    }

    if (engine.pointer1.hold) {
      engine.entity.transform.x = engine.pointer1.x
      engine.entity.transform.y = engine.pointer1.y
    }
  },
  draw: (engine) => {
    engine.render.context.save()
    engine.render.context.fillStyle = '#00ff00'
    engine.render.context.textAlign = 'center'
    engine.render.context.font = '14px Arial'
    engine.render.context.fillText('FPS: ' + Math.round(1000 / engine.loop.delta), 200, 20)
    engine.render.context.restore()

    engine.pointers.cache.forEach(function (pointer) {
      if (pointer.hold) {
        engine.render.context.save()
        engine.render.context.fillStyle = '#00ff00'
        engine.render.context.strokeStyle = '#00ff00'
        engine.render.context.lineWidth = '3'
        engine.render.context.beginPath()
        engine.render.context.arc(pointer.startX, pointer.startY, 60, 0, Math.PI * 2, true)
        engine.render.context.stroke()
        engine.render.context.beginPath()
        engine.render.context.arc(pointer.x, pointer.y, 30, 0, Math.PI * 2, true)
        engine.render.context.stroke()
        engine.render.context.font = '12px Arial'
        engine.render.context.fillText(
          'id: ' + pointer.id,
          pointer.startX - 80,
          pointer.startY - 115
        )
        engine.render.context.fillText(
          'startX: ' + pointer.startX + ', startY: ' + pointer.startY,
          pointer.startX - 80,
          pointer.startY - 100
        )
        engine.render.context.fillText(
          'currentX: ' + pointer.x + ', currentY: ' + pointer.y,
          pointer.startX - 80,
          pointer.startY - 85
        )
        engine.render.context.fillText(
          'offsetX: ' + (pointer.x - pointer.startX) + ', offsetY: ' + (pointer.y - pointer.startY),
          pointer.startX - 80,
          pointer.startY - 70
        )
        engine.render.context.restore()

        engine.render.context.save()
        engine.render.context.strokeStyle = '#ffff00'
        engine.render.context.beginPath()
        engine.render.context.moveTo(pointer.startX, pointer.startY)
        engine.render.context.lineTo(pointer.x, pointer.y)
        engine.render.context.stroke()

        engine.render.context.rect(
          pointer.startX,
          pointer.startY,
          pointer.x - pointer.startX,
          pointer.y - pointer.startY
        )
        engine.render.context.stroke()
        engine.render.context.restore()
      }
    })
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
