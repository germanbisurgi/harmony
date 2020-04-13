/* global Harmony debug */

const MemoryScene = new Harmony.Scene({
  create: (engine) => {
    // -------------------------------------------------------------------- data

    const letters = {
      a: { letterImage: 'a', letterAudio: 'a', thingImage: 'arancia', thingAudio: 'arancia' },
      b: { letterImage: 'b', letterAudio: 'b', thingImage: 'brucco', thingAudio: 'brucco' },
      c: { letterImage: 'c', letterAudio: 'c', thingImage: 'cane', thingAudio: 'cane' },
      d: { letterImage: 'd', letterAudio: 'd', thingImage: 'delfino', thingAudio: 'delfino' },
      e: { letterImage: 'e', letterAudio: 'e', thingImage: 'elefante', thingAudio: 'elefante' },
      f: { letterImage: 'f', letterAudio: 'f', thingImage: 'fiore', thingAudio: 'fiore' },
      g: { letterImage: 'g', letterAudio: 'g', thingImage: 'gufo', thingAudio: 'gufo' },
      h: { letterImage: 'h', letterAudio: 'h', thingImage: 'hotel', thingAudio: 'hotel' },
      i: { letterImage: 'i', letterAudio: 'i', thingImage: 'isola', thingAudio: 'isola' },
      j: { letterImage: 'j', letterAudio: 'j', thingImage: 'jeep', thingAudio: 'jeep' },
      k: { letterImage: 'k', letterAudio: 'k', thingImage: 'koala', thingAudio: 'koala' },
      l: { letterImage: 'l', letterAudio: 'l', thingImage: 'leone', thingAudio: 'leone' },
      m: { letterImage: 'm', letterAudio: 'm', thingImage: 'maiale', thingAudio: 'maiale' },
      n: { letterImage: 'n', letterAudio: 'n', thingImage: 'nave', thingAudio: 'nave' },
      o: { letterImage: 'o', letterAudio: 'o', thingImage: 'orso', thingAudio: 'orso' },
      p: { letterImage: 'p', letterAudio: 'p', thingImage: 'polpo', thingAudio: 'polpo' },
      q: { letterImage: 'q', letterAudio: 'q', thingImage: 'quaderno', thingAudio: 'quaderno' },
      r: { letterImage: 'r', letterAudio: 'r', thingImage: 'riccio', thingAudio: 'riccio' },
      s: { letterImage: 's', letterAudio: 's', thingImage: 'serpente', thingAudio: 'serpente' },
      t: { letterImage: 't', letterAudio: 't', thingImage: 'torre', thingAudio: 'torre' },
      u: { letterImage: 'u', letterAudio: 'u', thingImage: 'uccello', thingAudio: 'uccello' },
      v: { letterImage: 'v', letterAudio: 'v', thingImage: 'violino', thingAudio: 'violino' },
      w: { letterImage: 'w', letterAudio: 'w', thingImage: 'waffle', thingAudio: 'waffle' },
      x: { letterImage: 'x', letterAudio: 'x', thingImage: 'xilofono', thingAudio: 'xilofono' },
      y: { letterImage: 'y', letterAudio: 'y', thingImage: 'yoghurt', thingAudio: 'yoghurt' },
      z: { letterImage: 'z', letterAudio: 'z', thingImage: 'zebra', thingAudio: 'zebra' }
    }

    engine.pointers.enabled = true

    const rows = 2
    const cols = 2
    const width = window.innerWidth / cols
    const height = window.innerHeight / rows
    const ratioW = width / height
    const ratioH = height / width
    const ratio = ratioW < ratioH ? ratioW : ratioH
    const tileSize = 150 * ratio
    const randomLetters = engine.helpers.getRandomItems(Object.keys(letters), (rows * cols / 2))
    const grid = engine.helpers.createGrid(rows, cols)

    let match = false
    let selected = []
    let cards = []
    const flipped = []

    randomLetters.forEach((letter) => {
      const letterObj = {
        letter: letter,
        image: letters[letter].letterImage,
        audio: letters[letter].letterAudio
      }
      const thingObj = {
        letter: letter,
        image: letters[letter].thingImage,
        audio: letters[letter].thingAudio
      }
      cards.push(letterObj)
      cards.push(thingObj)
    })

    cards = engine.helpers.shuffleArray(cards)

    let cellIndex = 0
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < cols; row++) {
        grid[row][col] = 'row: ' + row + ' col: ' + col

        // -------------------------------------------------------------- back

        const backEntity = engine.entities.add({
          x: row * width + width * 0.5,
          y: col * height + height * 0.5,
          scale: 1.1
        })

        backEntity.addComponent(engine.render.addSpriteComponent({
          image: engine.render.get('question'),
          width: tileSize,
          height: tileSize
        }))

        // ------------------------------------------------------------- front

        const card = engine.entities.add({
          tags: ['card']
        })
        card.data = {}
        card.data.flipped = false
        card.data.letter = cards[cellIndex].letter
        card.data.audio = cards[cellIndex].audio
        card.data.image = cards[cellIndex].image

        card.addComponent(engine.audio.addAudioComponent({
          clipName: card.data.audio
        }))

        card.addComponent(engine.render.addSpriteComponent({
          image: engine.render.get(card.data.image),
          width: tileSize,
          height: tileSize,
          visible: false
        }))

        card.addComponent(engine.physics.addPhysicsComponent({
          x: row * width + width * 0.5,
          y: col * height + height * 0.5,
          type: 'static'
        }))

        card.components.physics.addCircle({
          radius: tileSize * 0.5,
          density: 10
        })

        cellIndex++
      }
    }

    // ----------------------------------------------------- audioManager entity

    const audioManager = engine.entities.add()
    audioManager.addComponent(engine.audio.addAudioComponent())

    // ---------------------------------------------------------- pointer entity

    const pointer = engine.entities.add({
      tags: ['pointer']
    })

    pointer.addComponent(engine.physics.addPhysicsComponent({
      x: -999999,
      y: -999999
    }))

    pointer.components.physics.addCircle({
      radius: 10,
      isSensor: true
    })

    pointer.addComponent(engine.state.addStateComponent({
      current: 'default',
      states: {
        default: {
          enter: (engine, entity) => {
            entity.components.physics.onContactBegin = function (pointer, card) {
              if (engine.pointers.enabled) {
                if (selected.length === 2 && !match) {
                  selected.forEach((card) => {
                    card.components.sprite.visible = false
                    card.data.flipped = !card.data.flipped
                  })
                  selected = []
                }

                if (selected.length === 2 && match) {
                  selected = []
                }

                if (!card.data.flipped && selected.length < 2) {
                  engine.audio.play(card, card.data.audio)
                  card.components.sprite.visible = true
                  card.data.flipped = !card.data.flipped
                  selected.push(card)
                }

                if (selected.length === 2) {
                  if (selected[0].data.letter === selected[1].data.letter) {
                    flipped.push(selected[0])
                    flipped.push(selected[1])
                    engine.audio.play(audioManager, 'correct')
                    match = true
                  } else {
                    match = false
                  }
                }
                if (flipped.length === (rows * cols)) {
                  engine.pointers.enabled = false
                  engine.audio.play(audioManager, 'win')
                  setTimeout(() => {
                    engine.scene.requestSwitch()
                  }, 2000)
                }
              }
            }
          },
          update: (engine, entity) => {
            if (engine.pointers.get(0).start) {
              entity.components.physics.setPosition({
                x: engine.pointers.get(0).x,
                y: engine.pointers.get(0).y
              })
            }
            if (engine.pointers.get(0).end) {
              entity.components.physics.setPosition({
                x: -999999,
                y: -999999
              })
            }
          }
        }
      }
    }))
  },
  draw: (engine) => {
    // debug(engine)
  }
})
