/* global Harmony debug */

const Scene1 = new Harmony.Scene({
  create: async (engine) => {
    document.querySelector('#loading').classList.add('hidden')

    // -------------------------------------------------------------------- data

    const letters = {
      a: { letter: 'a', type: 'letter', audio: 'a', image: 'a' },
      b: { letter: 'b', type: 'letter', audio: 'b', image: 'b' },
      c: { letter: 'c', type: 'letter', audio: 'c', image: 'c' },
      d: { letter: 'd', type: 'letter', audio: 'd', image: 'd' },
      e: { letter: 'e', type: 'letter', audio: 'e', image: 'e' },
      f: { letter: 'f', type: 'letter', audio: 'f', image: 'f' },
      g: { letter: 'g', type: 'letter', audio: 'g', image: 'g' },
      h: { letter: 'h', type: 'letter', audio: 'h', image: 'h' },
      i: { letter: 'i', type: 'letter', audio: 'i', image: 'i' },
      j: { letter: 'j', type: 'letter', audio: 'j', image: 'j' },
      k: { letter: 'k', type: 'letter', audio: 'k', image: 'k' },
      l: { letter: 'l', type: 'letter', audio: 'l', image: 'l' },
      m: { letter: 'm', type: 'letter', audio: 'm', image: 'm' },
      n: { letter: 'n', type: 'letter', audio: 'n', image: 'n' },
      o: { letter: 'o', type: 'letter', audio: 'o', image: 'o' },
      p: { letter: 'p', type: 'letter', audio: 'p', image: 'p' },
      q: { letter: 'q', type: 'letter', audio: 'q', image: 'q' },
      r: { letter: 'r', type: 'letter', audio: 'r', image: 'r' },
      s: { letter: 's', type: 'letter', audio: 's', image: 's' },
      t: { letter: 't', type: 'letter', audio: 't', image: 't' },
      u: { letter: 'u', type: 'letter', audio: 'u', image: 'u' },
      v: { letter: 'v', type: 'letter', audio: 'v', image: 'v' },
      w: { letter: 'w', type: 'letter', audio: 'w', image: 'w' },
      x: { letter: 'x', type: 'letter', audio: 'x', image: 'x' },
      y: { letter: 'y', type: 'letter', audio: 'y', image: 'y' },
      z: { letter: 'z', type: 'letter', audio: 'z', image: 'z' }
    }

    const animals = {
      a: { letter: 'a', type: 'animal', audio: 'arancia', image: 'arancia' },
      b: { letter: 'b', type: 'animal', audio: 'brucco', image: 'brucco' },
      c: { letter: 'c', type: 'animal', audio: 'cane', image: 'cane' },
      d: { letter: 'd', type: 'animal', audio: 'delfino', image: 'delfino' },
      e: { letter: 'e', type: 'animal', audio: 'elefante', image: 'elefante' },
      f: { letter: 'f', type: 'animal', audio: 'fiore', image: 'fiore' },
      g: { letter: 'g', type: 'animal', audio: 'gufo', image: 'gufo' },
      h: { letter: 'h', type: 'animal', audio: 'hotel', image: 'hotel' },
      i: { letter: 'i', type: 'animal', audio: 'isola', image: 'isola' },
      j: { letter: 'j', type: 'animal', audio: 'jeep', image: 'jeep' },
      k: { letter: 'k', type: 'animal', audio: 'koala', image: 'koala' },
      l: { letter: 'l', type: 'animal', audio: 'leone', image: 'leone' },
      m: { letter: 'm', type: 'animal', audio: 'maiale', image: 'maiale' },
      n: { letter: 'n', type: 'animal', audio: 'nave', image: 'nave' },
      o: { letter: 'o', type: 'animal', audio: 'orso', image: 'orso' },
      p: { letter: 'p', type: 'animal', audio: 'polpo', image: 'polpo' },
      q: { letter: 'q', type: 'animal', audio: 'quaderno', image: 'quaderno' },
      r: { letter: 'r', type: 'animal', audio: 'riccio', image: 'riccio' },
      s: { letter: 's', type: 'animal', audio: 'serpente', image: 'serpente' },
      t: { letter: 't', type: 'animal', audio: 'torre', image: 'torre' },
      u: { letter: 'u', type: 'animal', audio: 'uccello', image: 'uccello' },
      v: { letter: 'v', type: 'animal', audio: 'violino', image: 'violino' },
      w: { letter: 'w', type: 'animal', audio: 'waffle', image: 'waffle' },
      x: { letter: 'x', type: 'animal', audio: 'xilofono', image: 'xilofono' },
      y: { letter: 'y', type: 'animal', audio: 'yoghurt', image: 'yoghurt' },
      z: { letter: 'z', type: 'animal', audio: 'zebra', image: 'zebra' }
    }

    // ------------------------------------------------------------------- props

    const rows = 2
    const cols = 2
    const width = window.innerWidth / cols
    const height = window.innerHeight / rows
    const ratioW = width / height
    const ratioH = height / width
    const ratio = ratioW < ratioH ? ratioW : ratioH
    const tileSize = 150 * ratio
    const flipped = []
    let isCorrect = false
    let tempFlipped = []
    let interactionEnabled = true
    let randomLetters = []
    let cards = []
    let grid = null
    let answered = false

    // ----------------------------------------------------------------- methods

    const createGrid = () => {
      const grid = new Array(cols)
      for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(rows)
      }
      return grid
    }

    const getRandomInt = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const getRandomLetters = (array, quantity) => {
      const randomItems = []
      for (let i = quantity; i--;) {
        const randomIndex = getRandomInt(0, array.length - 1)
        randomItems.push(array[randomIndex])
        array.splice(randomIndex, 1)
      }
      return randomItems
    }

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const x = array[i]
        array[i] = array[j]
        array[j] = x
      }
      return array
    }

    const start = () => {
      randomLetters = getRandomLetters(Object.keys(letters), (rows * cols / 2))

      randomLetters.forEach((letter) => {
        cards.push(letters[letter])
        cards.push(animals[letter])
      })

      cards = shuffleArray(cards)

      grid = createGrid(rows, cols)

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
            sprite: engine.render.get('question'),
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
            sprite: engine.render.get(cards[cellIndex].image),
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
    }

    start()

    // ----------------------------------------------------- audioManager entity

    const audioManager = engine.entities.add('audio-manager')
    audioManager.addComponent(engine.transform.addTransformComponent())
    audioManager.addComponent(engine.audio.addAudioSourceComponent())
    audioManager.addComponent(engine.scripts.addScriptComponent({
      update: () => {
        if (engine.keys.get('1').start) {
          audioManager.audio.play('a')
        }

        if (engine.keys.get('2').start) {
          audioManager.audio.play('correct')
        }

        if (engine.keys.get('3').start) {
          audioManager.audio.play('win')
        }
      }
    }))

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
