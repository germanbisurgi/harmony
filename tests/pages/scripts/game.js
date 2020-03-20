/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupState = {
  preload: (engine) => {
    console.log('preload')
    engine.assets.addImage('angry-face', './assets/images/angry-face.png')
    engine.assets.addAudio('coin', './assets/audio/coin.wav')
    engine.assets.addAudioBuffer('tic', './assets/audio/tic.mp3')
    engine.assets.addJSON('test', './assets/json/test.json')
  },
  create: (engine) => {
    console.log('create')
    engine.c = engine.keys.add('c')
    engine.coin = engine.assets.getAudio('coin')
    engine.tick = engine.assets.getAudioBuffer('tic')
    engine.image = engine.assets.getImage('angry-face')
    // engine.pointers.enablePointers(engine.render.canvas)
    engine.pointer1 = engine.pointers.add()
    engine.pointer2 = engine.pointers.add()

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
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      var source = audioCtx.createBufferSource()
      source.buffer = engine.tic
      source.connect(audioCtx.destination)
      source.start()
    }
  }
}

const engine = new Engine({
  render: {
    canvas: '#engine-canvas',
    container: '#engine-container'
  }
})
engine.state.add('setup', setupState)
engine.state.switch('setup')
