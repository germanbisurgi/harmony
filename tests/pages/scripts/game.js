/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupState = new Harmony.State('setup', {
  preload: (engine) => {
    engine.assets.add(new Harmony.ImageAsset('angry-face', './assets/images/angry-face.png'))
    engine.assets.add(new Harmony.AudioAsset('coin', './assets/audio/coin.wav'))
    engine.assets.add(new Harmony.AudioBufferAsset('tic', './assets/audio/tic.mp3'))
    engine.assets.add(new Harmony.JSONAsset('test', './assets/json/test.json'))
  },
  create: (engine) => {
    // ------------------------------------------------------------------ assets

    engine.coin = engine.assets.get('coin')
    engine.tick = engine.assets.get('tic')
    engine.image = engine.assets.get('angry-face')

    // -------------------------------------------------------------------- keys

    engine.c = engine.keys.add(new Harmony.Key('c', false))
    engine.w = engine.keys.add(new Harmony.Key('w', false))
    engine.a = engine.keys.add(new Harmony.Key('a', false))
    engine.s = engine.keys.add(new Harmony.Key('s', false))
    engine.d = engine.keys.add(new Harmony.Key('d', false))
    engine.q = engine.keys.add(new Harmony.Key('q', false))
    engine.e = engine.keys.add(new Harmony.Key('e', false))
    engine.y = engine.keys.add(new Harmony.Key('y', false))
    engine.x = engine.keys.add(new Harmony.Key('x', false))

    // ---------------------------------------------------------------- pointers

    // engine.pointers.enablePointers(engine.render.canvas)
    engine.pointer1 = engine.pointers.add(new Harmony.Pointer())
    engine.pointer2 = engine.pointers.add(new Harmony.Pointer())

    // ---------------------------------------------------------------- entities

    engine.entity = new Harmony.Entity({
      x: 50,
      y: 50,
      angle: 4,
      scale: 1
    })

    engine.entity.addComponent(new Harmony.Renderable({
      image: engine.image,
      width: 50,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5
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
      engine.coin.currentTime = 0.1
      engine.coin.play()
    }

    // ---------------------------------------------------------------- pointers

    if (engine.pointer1.hold) {
      engine.entity.transform.x = engine.pointer1.x
      engine.entity.transform.y = engine.pointer1.y

      // const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      // const source = audioCtx.createBufferSource()
      // source.buffer = engine.tic
      // source.connect(audioCtx.destination)
      // source.start()
    }
  }
})

const engine = new Harmony.Engine(document.querySelector('#engine-canvas'))
engine.state.add(setupState)
console.table(engine)
engine.state.switch('setup')
