/* global Harmony debug */

const MemoryScene = new Harmony.Scene({
  create: async (engine) => {
    document.querySelector('#loading').classList.add('hidden')

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

    const rows = 2
    const cols = 2
    const width = window.innerWidth / cols
    const height = window.innerHeight / rows
    const ratioW = width / height
    const ratioH = height / width
    const ratio = ratioW < ratioH ? ratioW : ratioH
    const tileSize = 150 * ratio
    const flipped = []
    const randomLetters = engine.helpers.getRandomItems(Object.keys(letters), (rows * cols / 2))
    const grid = engine.helpers.createGrid(rows, cols)
    let isCorrect = false
    let tempFlipped = []
    let interactionEnabled = true
    let cards = []
    let answered = false

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

        const backEntity = engine.entities.add('question')
        backEntity.addComponent(engine.transform.addTransformComponent({
          x: row * width + width * 0.5,
          y: col * height + height * 0.5,
          scale: 1.1
        }))
        backEntity.addComponent(engine.render.addSpriteComponent({
          image: engine.render.get('question'),
          width: tileSize,
          height: tileSize
        }))

        // ------------------------------------------------------------- front

        const frontEntity = engine.entities.add('card')
        frontEntity.addComponent(engine.transform.addTransformComponent())
        frontEntity.flipped = false
        frontEntity.letter = cards[cellIndex].letter
        frontEntity.addComponent(engine.audio.addAudioSourceComponent({ clipName: cards[cellIndex].audio }))
        frontEntity.addComponent(engine.render.addSpriteComponent({
          image: engine.render.get(cards[cellIndex].image),
          width: tileSize,
          height: tileSize,
          visible: false
        }))
        frontEntity.addComponent(engine.physics.addPhysicsComponent({
          x: row * width + width * 0.5,
          y: col * height + height * 0.5,
          type: 'static'
        }))
        frontEntity.physics.addCircle({
          radius: tileSize * 0.5,
          density: 10
        })

        cellIndex++
      }
    }

    // ----------------------------------------------------- audioManager entity

    const audioManager = engine.entities.add('audio-manager')
    audioManager.addComponent(engine.transform.addTransformComponent())
    audioManager.addComponent(engine.audio.addAudioSourceComponent())

    // ---------------------------------------------------------- pointer entity

    const pointerColider = engine.entities.add('pointer')
    pointerColider.addComponent(engine.transform.addTransformComponent())
    pointerColider.addComponent(engine.physics.addPhysicsComponent({ x: -999999, y: -999999 }))
    pointerColider.physics.addCircle({ radius: 10, isSensor: true })
    pointerColider.addComponent(engine.scripts.addScriptComponent({
      start: () => {
        pointerColider.physics.onContactBegin = function (pointer, card) {
          if (interactionEnabled) {
            if (answered && !isCorrect) {
              tempFlipped.forEach((card) => {
                card.sprite.visible = false
                card.flipped = !card.flipped
              })
              tempFlipped = []
              answered = false
            }

            if (answered && isCorrect) {
              tempFlipped = []
              answered = false
            }

            if (!card.flipped && tempFlipped.length < 2) {
              card.audio.play()
              card.sprite.visible = true
              card.flipped = !card.flipped
              tempFlipped.push(card)
            }
            // two cards
            if (tempFlipped.length === 2) {
              answered = true
              // correct
              if (tempFlipped[0].letter === tempFlipped[1].letter) {
                flipped.push(tempFlipped[0])
                flipped.push(tempFlipped[1])
                audioManager.audio.play('correct')
                isCorrect = true
              } else {
                isCorrect = false
              }
            }
            if (flipped.length === (rows * cols)) {
              interactionEnabled = false
              audioManager.audio.play('win')
              setTimeout(() => {
                engine.scene.requestSwitch()
              }, 2000)
            }
          }
        }
      },
      update: () => {
        if (engine.pointers.get(0).start) {
          pointerColider.physics.setPosition({
            x: engine.pointers.get(0).x,
            y: engine.pointers.get(0).y
          })
        }

        if (engine.pointers.get(0).end) {
          pointerColider.physics.setPosition({
            x: -999999,
            y: -999999
          })
        }
      }
    }))
  },
  draw: (engine) => {
    debug(engine)
  }
})
