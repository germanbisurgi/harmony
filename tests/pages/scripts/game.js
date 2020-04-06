/* global Harmony */

const debug = (engine) => {
  engine.render.context.save()

  engine.render.context.fillStyle = '#00ff00'
  engine.render.context.font = '12px Arial'
  engine.render.text({
    text: 'fps: ' + Math.round(1000 / engine.loop.delta),
    x: 200,
    y: 200
  })
  engine.render.text({
    text: 'entities: ' + engine.entities.cache.length,
    x: 200,
    y: 220
  })
  engine.render.text({
    text: 'transform components: ' + engine.transform.components.length,
    x: 200,
    y: 240
  })
  engine.render.text({
    text: 'sprite components: ' + engine.render.components.length,
    x: 200,
    y: 260
  })
  engine.render.text({
    text: 'physics components: ' + engine.physics.components.length,
    x: 200,
    y: 280
  })
  engine.render.text({
    text: 'audio components: ' + engine.audio.components.length,
    x: 200,
    y: 300
  })
  engine.render.text({
    text: 'keys: ' + Object.keys(engine.keys.cache).length,
    x: 200,
    y: 320
  })
  engine.render.text({
    text: 'pointers: ' + Object.keys(engine.pointers.cache).length,
    x: 200,
    y: 340
  })

  engine.render.context.save()
  engine.render.context.strokeStyle = '#00ff00'
  engine.render.context.lineWidth = '1'
  engine.render.context.textAlign = 'center'

  for (const i in engine.pointers.cache) {
    if (Object.hasOwnProperty.call(engine.pointers.cache, i)) {
      const pointer = engine.pointers.cache[i]
      if (pointer.hold) {
        engine.render.circle({
          x: pointer.startX,
          y: pointer.startY,
          radius: 60
        })

        engine.render.circle({
          x: pointer.x,
          y: pointer.y,
          radius: 30
        })

        engine.render.text({
          text: 'type: ' + pointer.type,
          x: pointer.startX,
          y: pointer.startY - 130
        })

        engine.render.text({
          text: 'id: ' + pointer.id,
          x: pointer.startX,
          y: pointer.startY - 115
        })

        engine.render.text({
          text: 'startX: ' + pointer.startX + ', startY: ' + pointer.startY,
          x: pointer.startX,
          y: pointer.startY - 100
        })

        engine.render.text({
          text: 'currentX: ' + pointer.x + ', currentY: ' + pointer.y,
          x: pointer.startX,
          y: pointer.startY - 85
        })

        engine.render.text({
          text: 'offsetX: ' + (pointer.x - pointer.startX) + ', offsetY: ' + (pointer.y - pointer.startY),
          x: pointer.startX,
          y: pointer.startY - 70
        })

        engine.render.line({
          ax: pointer.startX,
          ay: pointer.startY,
          bx: pointer.x,
          by: pointer.y
        })

        engine.render.rect({
          x: pointer.startX,
          y: pointer.startY,
          width: pointer.x - pointer.startX,
          height: pointer.y - pointer.startY
        })
      }
    }
  }
  engine.render.context.restore()
}

const Scene1 = new Harmony.Scene({
  create: async (engine) => {
    // ------------------------------------------------------------------ assets

    document.querySelector('#loading').classList.remove('hidden')

    await engine.render.loadSprite({ name: 'question', url: './assets/images/question.png' })
    await engine.render.loadSprite({ name: 'a', url: './assets/images/alphabet/a.jpg' })
    await engine.render.loadSprite({ name: 'b', url: './assets/images/alphabet/b.jpg' })
    await engine.render.loadSprite({ name: 'c', url: './assets/images/alphabet/c.jpg' })
    await engine.render.loadSprite({ name: 'd', url: './assets/images/alphabet/d.jpg' })
    await engine.render.loadSprite({ name: 'e', url: './assets/images/alphabet/e.jpg' })
    await engine.render.loadSprite({ name: 'f', url: './assets/images/alphabet/f.jpg' })
    await engine.render.loadSprite({ name: 'g', url: './assets/images/alphabet/g.jpg' })
    await engine.render.loadSprite({ name: 'h', url: './assets/images/alphabet/h.jpg' })
    await engine.render.loadSprite({ name: 'i', url: './assets/images/alphabet/i.jpg' })
    await engine.render.loadSprite({ name: 'j', url: './assets/images/alphabet/j.jpg' })
    await engine.render.loadSprite({ name: 'k', url: './assets/images/alphabet/k.jpg' })
    await engine.render.loadSprite({ name: 'l', url: './assets/images/alphabet/l.jpg' })
    await engine.render.loadSprite({ name: 'm', url: './assets/images/alphabet/m.jpg' })
    await engine.render.loadSprite({ name: 'n', url: './assets/images/alphabet/n.jpg' })
    await engine.render.loadSprite({ name: 'o', url: './assets/images/alphabet/o.jpg' })
    await engine.render.loadSprite({ name: 'p', url: './assets/images/alphabet/p.jpg' })
    await engine.render.loadSprite({ name: 'q', url: './assets/images/alphabet/q.jpg' })
    await engine.render.loadSprite({ name: 'r', url: './assets/images/alphabet/r.jpg' })
    await engine.render.loadSprite({ name: 's', url: './assets/images/alphabet/s.jpg' })
    await engine.render.loadSprite({ name: 't', url: './assets/images/alphabet/t.jpg' })
    await engine.render.loadSprite({ name: 'u', url: './assets/images/alphabet/u.jpg' })
    await engine.render.loadSprite({ name: 'v', url: './assets/images/alphabet/v.jpg' })
    await engine.render.loadSprite({ name: 'w', url: './assets/images/alphabet/w.jpg' })
    await engine.render.loadSprite({ name: 'x', url: './assets/images/alphabet/x.jpg' })
    await engine.render.loadSprite({ name: 'y', url: './assets/images/alphabet/y.jpg' })
    await engine.render.loadSprite({ name: 'z', url: './assets/images/alphabet/z.jpg' })
    await engine.render.loadSprite({ name: 'arancia', url: './assets/images/things/arancia.jpg' })
    await engine.render.loadSprite({ name: 'brucco', url: './assets/images/things/brucco.jpg' })
    await engine.render.loadSprite({ name: 'cane', url: './assets/images/things/cane.jpg' })
    await engine.render.loadSprite({ name: 'delfino', url: './assets/images/things/delfino.jpg' })
    await engine.render.loadSprite({ name: 'elefante', url: './assets/images/things/elefante.jpg' })
    await engine.render.loadSprite({ name: 'fiore', url: './assets/images/things/fiore.jpg' })
    await engine.render.loadSprite({ name: 'gufo', url: './assets/images/things/gufo.jpg' })
    await engine.render.loadSprite({ name: 'hotel', url: './assets/images/things/hotel.jpg' })
    await engine.render.loadSprite({ name: 'isola', url: './assets/images/things/isola.jpg' })
    await engine.render.loadSprite({ name: 'jeep', url: './assets/images/things/jeep.jpg' })
    await engine.render.loadSprite({ name: 'koala', url: './assets/images/things/koala.jpg' })
    await engine.render.loadSprite({ name: 'leone', url: './assets/images/things/leone.jpg' })
    await engine.render.loadSprite({ name: 'maiale', url: './assets/images/things/maiale.jpg' })
    await engine.render.loadSprite({ name: 'nave', url: './assets/images/things/nave.jpg' })
    await engine.render.loadSprite({ name: 'orso', url: './assets/images/things/orso.jpg' })
    await engine.render.loadSprite({ name: 'polpo', url: './assets/images/things/polpo.jpg' })
    await engine.render.loadSprite({ name: 'quaderno', url: './assets/images/things/quaderno.jpg' })
    await engine.render.loadSprite({ name: 'riccio', url: './assets/images/things/riccio.jpg' })
    await engine.render.loadSprite({ name: 'serpente', url: './assets/images/things/serpente.jpg' })
    await engine.render.loadSprite({ name: 'torre', url: './assets/images/things/torre.jpg' })
    await engine.render.loadSprite({ name: 'uccello', url: './assets/images/things/uccello.jpg' })
    await engine.render.loadSprite({ name: 'violino', url: './assets/images/things/violino.jpg' })
    await engine.render.loadSprite({ name: 'waffle', url: './assets/images/things/waffle.jpg' })
    await engine.render.loadSprite({ name: 'xilofono', url: './assets/images/things/xilofono.jpg' })
    await engine.render.loadSprite({ name: 'yoghurt', url: './assets/images/things/yoghurt.jpg' })
    await engine.render.loadSprite({ name: 'zebra', url: './assets/images/things/zebra.jpg' })

    await engine.audio.loadClip({ name: 'correct', url: './assets/audio/correct.wav' })
    await engine.audio.loadClip({ name: 'win', url: './assets/audio/win.wav' })
    await engine.audio.loadClip({ name: 'a', url: './assets/audio/alphabet/a.wav' })
    await engine.audio.loadClip({ name: 'b', url: './assets/audio/alphabet/b.wav' })
    await engine.audio.loadClip({ name: 'c', url: './assets/audio/alphabet/c.wav' })
    await engine.audio.loadClip({ name: 'd', url: './assets/audio/alphabet/d.wav' })
    await engine.audio.loadClip({ name: 'e', url: './assets/audio/alphabet/e.wav' })
    await engine.audio.loadClip({ name: 'f', url: './assets/audio/alphabet/f.wav' })
    await engine.audio.loadClip({ name: 'g', url: './assets/audio/alphabet/g.wav' })
    await engine.audio.loadClip({ name: 'h', url: './assets/audio/alphabet/h.wav' })
    await engine.audio.loadClip({ name: 'i', url: './assets/audio/alphabet/i.wav' })
    await engine.audio.loadClip({ name: 'j', url: './assets/audio/alphabet/j.wav' })
    await engine.audio.loadClip({ name: 'k', url: './assets/audio/alphabet/k.wav' })
    await engine.audio.loadClip({ name: 'l', url: './assets/audio/alphabet/l.wav' })
    await engine.audio.loadClip({ name: 'm', url: './assets/audio/alphabet/m.wav' })
    await engine.audio.loadClip({ name: 'n', url: './assets/audio/alphabet/n.wav' })
    await engine.audio.loadClip({ name: 'o', url: './assets/audio/alphabet/o.wav' })
    await engine.audio.loadClip({ name: 'p', url: './assets/audio/alphabet/p.wav' })
    await engine.audio.loadClip({ name: 'q', url: './assets/audio/alphabet/q.wav' })
    await engine.audio.loadClip({ name: 'r', url: './assets/audio/alphabet/r.wav' })
    await engine.audio.loadClip({ name: 's', url: './assets/audio/alphabet/s.wav' })
    await engine.audio.loadClip({ name: 't', url: './assets/audio/alphabet/t.wav' })
    await engine.audio.loadClip({ name: 'u', url: './assets/audio/alphabet/u.wav' })
    await engine.audio.loadClip({ name: 'v', url: './assets/audio/alphabet/v.wav' })
    await engine.audio.loadClip({ name: 'w', url: './assets/audio/alphabet/w.wav' })
    await engine.audio.loadClip({ name: 'x', url: './assets/audio/alphabet/x.wav' })
    await engine.audio.loadClip({ name: 'y', url: './assets/audio/alphabet/y.wav' })
    await engine.audio.loadClip({ name: 'z', url: './assets/audio/alphabet/z.wav' })
    await engine.audio.loadClip({ name: 'arancia', url: './assets/audio/things/arancia.wav' })
    await engine.audio.loadClip({ name: 'brucco', url: './assets/audio/things/brucco.wav' })
    await engine.audio.loadClip({ name: 'cane', url: './assets/audio/things/cane.wav' })
    await engine.audio.loadClip({ name: 'delfino', url: './assets/audio/things/delfino.wav' })
    await engine.audio.loadClip({ name: 'elefante', url: './assets/audio/things/elefante.wav' })
    await engine.audio.loadClip({ name: 'fiore', url: './assets/audio/things/fiore.wav' })
    await engine.audio.loadClip({ name: 'gufo', url: './assets/audio/things/gufo.wav' })
    await engine.audio.loadClip({ name: 'hotel', url: './assets/audio/things/hotel.wav' })
    await engine.audio.loadClip({ name: 'isola', url: './assets/audio/things/isola.wav' })
    await engine.audio.loadClip({ name: 'jeep', url: './assets/audio/things/jeep.wav' })
    await engine.audio.loadClip({ name: 'koala', url: './assets/audio/things/koala.wav' })
    await engine.audio.loadClip({ name: 'leone', url: './assets/audio/things/leone.wav' })
    await engine.audio.loadClip({ name: 'maiale', url: './assets/audio/things/maiale.wav' })
    await engine.audio.loadClip({ name: 'nave', url: './assets/audio/things/nave.wav' })
    await engine.audio.loadClip({ name: 'orso', url: './assets/audio/things/orso.wav' })
    await engine.audio.loadClip({ name: 'polpo', url: './assets/audio/things/polpo.wav' })
    await engine.audio.loadClip({ name: 'quaderno', url: './assets/audio/things/quaderno.wav' })
    await engine.audio.loadClip({ name: 'riccio', url: './assets/audio/things/riccio.wav' })
    await engine.audio.loadClip({ name: 'serpente', url: './assets/audio/things/serpente.wav' })
    await engine.audio.loadClip({ name: 'torre', url: './assets/audio/things/torre.wav' })
    await engine.audio.loadClip({ name: 'uccello', url: './assets/audio/things/uccello.wav' })
    await engine.audio.loadClip({ name: 'violino', url: './assets/audio/things/violino.wav' })
    await engine.audio.loadClip({ name: 'waffle', url: './assets/audio/things/waffle.wav' })
    await engine.audio.loadClip({ name: 'xilofono', url: './assets/audio/things/xilofono.wav' })
    await engine.audio.loadClip({ name: 'yoghurt', url: './assets/audio/things/yoghurt.wav' })
    await engine.audio.loadClip({ name: 'zebra', url: './assets/audio/things/zebra.wav' })

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
    pointerColider.physics.addCircle({ radius: 30, isSensor: true })
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

const Scene2 = new Harmony.Scene({
  create: async (engine) => {
    document.querySelector('#loading').classList.remove('hidden')

    await engine.render.loadSprite({ name: 'question', url: './assets/images/question.png' })
    await engine.audio.loadClip({ name: 'correct', url: './assets/audio/correct.wav' })
    await engine.audio.loadClip({ name: 'win', url: './assets/audio/win.wav' })

    document.querySelector('#loading').classList.add('hidden')

    const entity = engine.entities.add('something')
    entity.addComponent(engine.transform.addTransformComponent())
    entity.addComponent(engine.physics.addPhysicsComponent())
    entity.addComponent(engine.audio.addAudioSourceComponent())
    entity.addComponent(engine.render.addSpriteComponent({ sprite: engine.render.get('question'), width: 50, height: 50 }))
    entity.addComponent(engine.scripts.addScriptComponent({
      update: () => {
        if (engine.keys.get('1').start) {
          console.log('start')
          entity.audio.play('win')
        }
        if (engine.keys.get('1').keyHold) {
          console.log(engine.keys.get('1').keyHoldTime)
        }
        if (engine.keys.get('1').keyEnd) {
          console.log('end')
        }
        if (engine.keys.get('2').start) {
          entity.audio.stop()
          entity.audio.play('win')
        }
        if (engine.keys.get('3').start) {
          entity.audio.stop()
        }
      }
    }))
  },
  draw: (engine) => {
    debug(engine)
  }
})

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(Scene1)

window.onerror = function (msg, url, linenumber) {
  window.alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
  return true
}
