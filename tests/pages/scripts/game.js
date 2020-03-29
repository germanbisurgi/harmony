/* global Harmony */

const Scene1 = new Harmony.Scene({
  create: async (engine, refs) => {
    // ------------------------------------------------------------------ assets

    refs.face = await engine.assets.addImage({ url: './assets/images/angry-face.png' })
    refs.audioBufferTic = await engine.assets.addAudioBuffer({ url: './assets/audio/tic.mp3' })

    refs.trackTic = engine.audio.add({ buffer: refs.audioBufferTic })

    // -------------------------------------------------------------------- keys

    refs.key1 = engine.keys.add({ key: '1' })
    refs.key2 = engine.keys.add({ key: '2' })

    // ---------------------------------------------------------------- pointers

    refs.pointer1 = engine.pointers.add()
    refs.pointer2 = engine.pointers.add()

    // ---------------------------------------------------------------- entities

    refs.rows = 3
    refs.cols = 3
    refs.width = window.innerWidth / refs.cols
    refs.height = window.innerHeight / refs.rows
    refs.ratioW = refs.width / refs.height
    refs.ratioH = refs.height / refs.width
    refs.ratio = refs.ratioW < refs.ratioH ? refs.ratioW : refs.ratioH
    refs.tileSize = 100 * refs.ratio

    const grid = new Array(refs.cols)
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(refs.rows)
    }

    for (let col = 0; col < refs.cols; col++) {
      for (let row = 0; row < refs.cols; row++) {
        grid[row][col] = 'row: ' + row + ' col: ' + col
        refs.entity = engine.entities.add()
        refs.entity.addComponent(engine.render.addSpriteComponent({
          image: refs.face,
          width: refs.tileSize,
          height: refs.tileSize,
          anchorX: 0.5,
          anchorY: 0.5
        }))

        refs.entity.addComponent(engine.physics.addPhysicsComponent({
          x: row * refs.width + refs.width * 0.5,
          y: col * refs.height + refs.height * 0.5
        }))

        refs.entity.physics.addCircle({
          radius: refs.tileSize * 0.5,
          density: 10
        })
      }
    }
    // refs.entity = engine.entities.add({ x: 200, y: 200, angle: 4, scale: 1 })
    // refs.entity.addComponent(engine.render.addSpriteComponent({ image: refs.face, width: 100, height: 100, anchorX: 0.5, anchorY: 0.5 }))
    // refs.entity.addComponent(engine.physics.addPhysicsComponent({ x: 200, y: 200 }))
    // refs.entity.physics.addCircle({ x: 0, y: 0, radius: 60 })
  },
  update: (engine, refs) => {
    if (refs.key1.start) {
      engine.scene.switch(Scene1)
    }

    if (refs.key2.start) {
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
  },
  update: (engine, refs) => {
    if (refs.key1.start) {
      engine.scene.switch(Scene1)
    }

    if (refs.key2.start) {
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
