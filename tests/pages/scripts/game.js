/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupState = new Harmony.State('setup', {
  preload: (engine) => {
    console.log('preload')
    engine.assets.add(new Harmony.ImageAsset('angry-face', './assets/images/angry-face.png'))
    engine.assets.add(new Harmony.AudioAsset('coin', './assets/audio/coin.wav'))
    engine.assets.add(new Harmony.AudioBufferAsset('tic', './assets/audio/tic.mp3'))
    engine.assets.add(new Harmony.JSONAsset('test', './assets/json/test.json'))
  },
  create: (engine) => {
    console.log('create')

    engine.coin = engine.assets.get('coin')
    engine.tick = engine.assets.get('tic')
    engine.image = engine.assets.get('angry-face')

    engine.c = engine.keys.add(new Harmony.Key('c', false))

    // engine.pointers.enablePointers(engine.render.canvas)
    engine.pointer1 = engine.pointers.add(new Harmony.Pointer())
    engine.pointer2 = engine.pointers.add(new Harmony.Pointer())

    engine.gameObject = new Harmony.GameObject()
    engine.gameObject.addComponent(new Harmony.Renderable({
      image: engine.image,
      x: 50,
      y: 50,
      angle: 4,
      scale: 1,
      width: 50,
      height: 50,
      anchorX: 0,
      anchorY: 0
    }))
    console.table(engine.gameObject)

    engine.render.addRenderable({
      image: engine.image,
      x: 50,
      y: 50,
      angle: 4,
      scale: 1,
      width: 50,
      height: 50,
      anchorX: 0,
      anchorY: 0
    })
  },
  update: (engine) => {
    console.log('update')
    if (engine.c.start) {
      engine.coin.currentTime = 0.1
      engine.coin.play()
    }

    if (engine.pointer1.start) {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const source = audioCtx.createBufferSource()
      source.buffer = engine.tic
      source.connect(audioCtx.destination)
      source.start()
    }
  }
})

const engine = new Harmony.Engine({
  render: {
    canvas: '#engine-canvas',
    container: '#engine-container'
  }
})
engine.state.add(setupState)
engine.state.switch('setup')
