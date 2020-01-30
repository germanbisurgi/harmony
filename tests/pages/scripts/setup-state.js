/* eslint-disable no-unused-vars */
const setupState = {
  preload: (engine) => {
    engine.assets.addImage('angry-face', './assets/images/angry-face.png')
    engine.assets.addAudio('coin', './assets/audio/coin.wav')
    engine.assets.addAudioBuffer('tic', './assets/audio/tic.mp3')
    engine.assets.addJSON('test', './assets/json/test.json')
  },
  create: (engine) => {
    console.log(engine.render)
    engine.c = engine.keys.add('c')
    engine.coin = engine.assets.getAudio('coin')
    engine.tick = engine.assets.getAudioBuffer('tic')
    engine.pointers.enablePointers(engine.render.canvas)
    engine.pointer1 = engine.pointers.add()
    engine.pointer2 = engine.pointers.add()
    // engine.render.addRenderable(engine.assets.getImage('angry-face'), 50, 50, 50, 50)
  },
  update: (engine) => {
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
