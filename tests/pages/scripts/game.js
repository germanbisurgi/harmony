/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupState = new Harmony.State('setup', {
  preload: (engine) => {
    engine.assets.add(new Harmony.ImageAsset('image-angry-face', './assets/images/angry-face.png'))
    engine.assets.add(new Harmony.AudioAsset('audio-coin', './assets/audio/coin.wav'))
    engine.assets.add(new Harmony.AudioBufferAsset('audio-buffer-tic', './assets/audio/tic.mp3'))
    engine.assets.add(new Harmony.AudioBufferAsset('audio-buffer-coin', './assets/audio/coin.wav'))
    engine.assets.add(new Harmony.JSONAsset('json-test', './assets/json/test.json'))
  },
  create: (engine) => {
    // ------------------------------------------------------------------ assets

    engine.imageAngryFace = engine.assets.get('image-angry-face')
    engine.audioCoin = engine.assets.get('audio-coin')

    engine.trackCoin = new Harmony.Track(engine.assets.get('audio-buffer-coin'))
    engine.trackTic = new Harmony.Track(engine.assets.get('audio-buffer-tic'))

    // -------------------------------------------------------------------- keys

    engine.c = engine.keys.add({key: 'c'})
    engine.w = engine.keys.add({key: 'w'})
    engine.a = engine.keys.add({key: 'a'})
    engine.s = engine.keys.add({key: 's'})
    engine.d = engine.keys.add({key: 'd'})
    engine.q = engine.keys.add({key: 'q'})
    engine.e = engine.keys.add({key: 'e'})
    engine.y = engine.keys.add({key: 'y'})
    engine.x = engine.keys.add({key: 'x'})

    // ---------------------------------------------------------------- pointers

    engine.pointer1 = engine.pointers.add()
    engine.pointer2 = engine.pointers.add()

    // ---------------------------------------------------------------- entities

    engine.entity = new Harmony.Entity({
      x: 50,
      y: 50,
      angle: 4,
      scale: 1
    })

    engine.entity.addComponent(new Harmony.Renderable({
      image: engine.imageAngryFace,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
    }))

    engine.entity.addComponent(new Harmony.Physycs({
      world: engine.physycs.world
    }))

    engine.entities.add(engine.entity)

    console.table(engine.entity)
  },
  update: (engine) => {
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
