/* global Harmony */

const debug = (engine, refs) => {
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
    text: 'refs: ' + Object.keys(refs).length,
    x: 200,
    y: 320
  })
  engine.render.text({
    text: 'keys: ' + Object.keys(engine.keys.cache).length,
    x: 200,
    y: 340
  })
  engine.render.context.restore()
}

const Scene1 = new Harmony.Scene({
  create: async (engine, refs) => {
    // ------------------------------------------------------------------ assets

    refs.question = await engine.assets.addImage({ url: './assets/images/question.png' })
    refs.imageA = await engine.assets.addImage({ url: './assets/images/alphabet/a.jpg' })
    refs.imageB = await engine.assets.addImage({ url: './assets/images/alphabet/b.jpg' })
    refs.imageC = await engine.assets.addImage({ url: './assets/images/alphabet/c.jpg' })
    refs.imageD = await engine.assets.addImage({ url: './assets/images/alphabet/d.jpg' })
    refs.imageE = await engine.assets.addImage({ url: './assets/images/alphabet/e.jpg' })
    refs.imageF = await engine.assets.addImage({ url: './assets/images/alphabet/f.jpg' })
    refs.imageG = await engine.assets.addImage({ url: './assets/images/alphabet/g.jpg' })
    refs.imageH = await engine.assets.addImage({ url: './assets/images/alphabet/h.jpg' })
    refs.imageI = await engine.assets.addImage({ url: './assets/images/alphabet/i.jpg' })
    refs.imageJ = await engine.assets.addImage({ url: './assets/images/alphabet/j.jpg' })
    refs.imageK = await engine.assets.addImage({ url: './assets/images/alphabet/k.jpg' })
    refs.imageL = await engine.assets.addImage({ url: './assets/images/alphabet/l.jpg' })
    refs.imageM = await engine.assets.addImage({ url: './assets/images/alphabet/m.jpg' })
    refs.imageN = await engine.assets.addImage({ url: './assets/images/alphabet/n.jpg' })
    refs.imageO = await engine.assets.addImage({ url: './assets/images/alphabet/o.jpg' })
    refs.imageP = await engine.assets.addImage({ url: './assets/images/alphabet/p.jpg' })
    refs.imageQ = await engine.assets.addImage({ url: './assets/images/alphabet/q.jpg' })
    refs.imageR = await engine.assets.addImage({ url: './assets/images/alphabet/r.jpg' })
    refs.imageS = await engine.assets.addImage({ url: './assets/images/alphabet/s.jpg' })
    refs.imageT = await engine.assets.addImage({ url: './assets/images/alphabet/t.jpg' })
    refs.imageU = await engine.assets.addImage({ url: './assets/images/alphabet/u.jpg' })
    refs.imageV = await engine.assets.addImage({ url: './assets/images/alphabet/v.jpg' })
    refs.imageW = await engine.assets.addImage({ url: './assets/images/alphabet/w.jpg' })
    refs.imageX = await engine.assets.addImage({ url: './assets/images/alphabet/x.jpg' })
    refs.imageY = await engine.assets.addImage({ url: './assets/images/alphabet/y.jpg' })
    refs.imageZ = await engine.assets.addImage({ url: './assets/images/alphabet/z.jpg' })

    refs.imageArancia = await engine.assets.addImage({ url: './assets/images/things/arancia.jpg' })
    refs.imageBrucco = await engine.assets.addImage({ url: './assets/images/things/brucco.jpg' })
    refs.imageCane = await engine.assets.addImage({ url: './assets/images/things/cane.jpg' })
    refs.imageDelfino = await engine.assets.addImage({ url: './assets/images/things/delfino.jpg' })
    refs.imageElefante = await engine.assets.addImage({ url: './assets/images/things/elefante.jpg' })
    refs.imageFiore = await engine.assets.addImage({ url: './assets/images/things/fiore.jpg' })
    refs.imageGufo = await engine.assets.addImage({ url: './assets/images/things/gufo.jpg' })
    refs.imageHotel = await engine.assets.addImage({ url: './assets/images/things/hotel.jpg' })
    refs.imageIsola = await engine.assets.addImage({ url: './assets/images/things/isola.jpg' })
    refs.imageJeep = await engine.assets.addImage({ url: './assets/images/things/jeep.jpg' })
    refs.imageKoala = await engine.assets.addImage({ url: './assets/images/things/koala.jpg' })
    refs.imageLeone = await engine.assets.addImage({ url: './assets/images/things/leone.jpg' })
    refs.imageMaiale = await engine.assets.addImage({ url: './assets/images/things/maiale.jpg' })
    refs.imageNave = await engine.assets.addImage({ url: './assets/images/things/nave.jpg' })
    refs.imageOrso = await engine.assets.addImage({ url: './assets/images/things/orso.jpg' })
    refs.imagePolpo = await engine.assets.addImage({ url: './assets/images/things/polpo.jpg' })
    refs.imageQuaderno = await engine.assets.addImage({ url: './assets/images/things/quaderno.jpg' })
    refs.imageRiccio = await engine.assets.addImage({ url: './assets/images/things/riccio.jpg' })
    refs.imageSerpente = await engine.assets.addImage({ url: './assets/images/things/serpente.jpg' })
    refs.imageTorre = await engine.assets.addImage({ url: './assets/images/things/torre.jpg' })
    refs.imageUccello = await engine.assets.addImage({ url: './assets/images/things/uccello.jpg' })
    refs.imageViolino = await engine.assets.addImage({ url: './assets/images/things/violino.jpg' })
    refs.imageWaffle = await engine.assets.addImage({ url: './assets/images/things/waffle.jpg' })
    refs.imageXilofono = await engine.assets.addImage({ url: './assets/images/things/xilofono.jpg' })
    refs.imageYoghurt = await engine.assets.addImage({ url: './assets/images/things/yoghurt.jpg' })
    refs.imageZebra = await engine.assets.addImage({ url: './assets/images/things/zebra.jpg' })

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

    // -------------------------------------------------------------------- keys

    refs.key1 = engine.keys.add({ key: '1' })
    refs.key2 = engine.keys.add({ key: '2' })
    refs.key3 = engine.keys.add({ key: '3' })

    // ---------------------------------------------------------------- pointers

    refs.pointer1 = engine.pointers.add()
    refs.pointer2 = engine.pointers.add()

    // -------------------------------------------------------------------- data

    const letters = {
      a: { letter: 'a', type: 'letter', audio: 'a', image: refs.imageA },
      b: { letter: 'b', type: 'letter', audio: 'b', image: refs.imageB },
      c: { letter: 'c', type: 'letter', audio: 'c', image: refs.imageC },
      d: { letter: 'd', type: 'letter', audio: 'd', image: refs.imageD },
      e: { letter: 'e', type: 'letter', audio: 'e', image: refs.imageE },
      f: { letter: 'f', type: 'letter', audio: 'f', image: refs.imageF },
      g: { letter: 'g', type: 'letter', audio: 'g', image: refs.imageG },
      h: { letter: 'h', type: 'letter', audio: 'h', image: refs.imageH },
      i: { letter: 'i', type: 'letter', audio: 'i', image: refs.imageI },
      j: { letter: 'j', type: 'letter', audio: 'j', image: refs.imageJ },
      k: { letter: 'k', type: 'letter', audio: 'k', image: refs.imageK },
      l: { letter: 'l', type: 'letter', audio: 'l', image: refs.imageL },
      m: { letter: 'm', type: 'letter', audio: 'm', image: refs.imageM },
      n: { letter: 'n', type: 'letter', audio: 'n', image: refs.imageN },
      o: { letter: 'o', type: 'letter', audio: 'o', image: refs.imageO },
      p: { letter: 'p', type: 'letter', audio: 'p', image: refs.imageP },
      q: { letter: 'q', type: 'letter', audio: 'q', image: refs.imageQ },
      r: { letter: 'r', type: 'letter', audio: 'r', image: refs.imageR },
      s: { letter: 's', type: 'letter', audio: 's', image: refs.imageS },
      t: { letter: 't', type: 'letter', audio: 't', image: refs.imageT },
      u: { letter: 'u', type: 'letter', audio: 'u', image: refs.imageU },
      v: { letter: 'v', type: 'letter', audio: 'v', image: refs.imageV },
      w: { letter: 'w', type: 'letter', audio: 'w', image: refs.imageW },
      x: { letter: 'x', type: 'letter', audio: 'x', image: refs.imageX },
      y: { letter: 'y', type: 'letter', audio: 'y', image: refs.imageY },
      z: { letter: 'z', type: 'letter', audio: 'z', image: refs.imageZ }
    }

    const animals = {
      a: { letter: 'a', type: 'animal', audio: 'arancia', image: refs.imageArancia },
      b: { letter: 'b', type: 'animal', audio: 'brucco', image: refs.imageBrucco },
      c: { letter: 'c', type: 'animal', audio: 'cane', image: refs.imageCane },
      d: { letter: 'd', type: 'animal', audio: 'delfino', image: refs.imageDelfino },
      e: { letter: 'e', type: 'animal', audio: 'elefante', image: refs.imageElefante },
      f: { letter: 'f', type: 'animal', audio: 'fiore', image: refs.imageFiore },
      g: { letter: 'g', type: 'animal', audio: 'gufo', image: refs.imageGufo },
      h: { letter: 'h', type: 'animal', audio: 'hotel', image: refs.imageHotel },
      i: { letter: 'i', type: 'animal', audio: 'isola', image: refs.imageIsola },
      j: { letter: 'j', type: 'animal', audio: 'jeep', image: refs.imageJeep },
      k: { letter: 'k', type: 'animal', audio: 'koala', image: refs.imageKoala },
      l: { letter: 'l', type: 'animal', audio: 'leone', image: refs.imageLeone },
      m: { letter: 'm', type: 'animal', audio: 'maiale', image: refs.imageMaiale },
      n: { letter: 'n', type: 'animal', audio: 'nave', image: refs.imageNave },
      o: { letter: 'o', type: 'animal', audio: 'orso', image: refs.imageOrso },
      p: { letter: 'p', type: 'animal', audio: 'polpo', image: refs.imagePolpo },
      q: { letter: 'q', type: 'animal', audio: 'quaderno', image: refs.imageQuaderno },
      r: { letter: 'r', type: 'animal', audio: 'riccio', image: refs.imageRiccio },
      s: { letter: 's', type: 'animal', audio: 'serpente', image: refs.imageSerpente },
      t: { letter: 't', type: 'animal', audio: 'torre', image: refs.imageTorre },
      u: { letter: 'u', type: 'animal', audio: 'uccello', image: refs.imageUccello },
      v: { letter: 'v', type: 'animal', audio: 'violino', image: refs.imageViolino },
      w: { letter: 'w', type: 'animal', audio: 'waffle', image: refs.imageWaffle },
      x: { letter: 'x', type: 'animal', audio: 'xilofono', image: refs.imageXilofono },
      y: { letter: 'y', type: 'animal', audio: 'yoghurt', image: refs.imageYoghurt },
      z: { letter: 'z', type: 'animal', audio: 'zebra', image: refs.imageZebra }
    }

    // ------------------------------------------------------------------- props

    refs.rows = 4
    refs.cols = 4
    refs.width = window.innerWidth / refs.cols
    refs.height = window.innerHeight / refs.rows
    refs.ratioW = refs.width / refs.height
    refs.ratioH = refs.height / refs.width
    refs.ratio = refs.ratioW < refs.ratioH ? refs.ratioW : refs.ratioH
    refs.tileSize = 150 * refs.ratio
    refs.isCorrect = false
    refs.flipped = []
    refs.tempFlipped = []
    refs.interactionEnabled = true
    refs.randomLetters = []
    refs.cards = []
    refs.cardEntities = []
    refs.grid = null

    // ----------------------------------------------------------------- methods

    refs.createGrid = () => {
      const grid = new Array(refs.cols)
      for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(refs.rows)
      }
      return grid
    }

    refs.getRandomInt = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    refs.getRandomLetters = (array, quantity) => {
      const randomItems = []
      for (let i = quantity; i--;) {
        const randomIndex = refs.getRandomInt(0, array.length - 1)
        randomItems.push(array[randomIndex])
        array.splice(randomIndex, 1)
      }
      return randomItems
    }

    refs.shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const x = array[i]
        array[i] = array[j]
        array[j] = x
      }
      return array
    }

    refs.start = () => {
      refs.randomLetters = refs.getRandomLetters(Object.keys(letters), (refs.rows * refs.cols / 2))

      refs.randomLetters.forEach((letter) => {
        refs.cards.push(letters[letter])
        refs.cards.push(animals[letter])
      })

      refs.cards = refs.shuffleArray(refs.cards)

      refs.gridgrid = refs.createGrid(refs.rows, refs.cols)

      let cellIndex = 0
      for (let col = 0; col < refs.cols; col++) {
        for (let row = 0; row < refs.cols; row++) {
          refs.gridgrid[row][col] = 'row: ' + row + ' col: ' + col

          // -------------------------------------------------------------- back

          const backEntity = engine.entities.add()
          backEntity.addComponent(engine.transform.addTransformComponent({
            x: row * refs.width + refs.width * 0.5,
            y: col * refs.height + refs.height * 0.5,
            scale: 1.1
          }))
          backEntity.addComponent(engine.render.addSpriteComponent({
            image: refs.question,
            width: refs.tileSize,
            height: refs.tileSize
          }))

          // ------------------------------------------------------------- front

          const frontEntity = engine.entities.add({ tag: 'card' })
          frontEntity.addComponent(engine.transform.addTransformComponent())
          frontEntity.flipped = false
          frontEntity.letter = refs.cards[cellIndex].letter
          frontEntity.type = refs.cards[cellIndex].type
          frontEntity.addComponent(engine.audio.addAudioSourceComponent({ clipName: refs.cards[cellIndex].audio }))
          frontEntity.addComponent(engine.render.addSpriteComponent({
            image: refs.cards[cellIndex].image,
            width: refs.tileSize,
            height: refs.tileSize,
            visible: false
          }))
          frontEntity.addComponent(engine.physics.addPhysicsComponent({
            x: row * refs.width + refs.width * 0.5,
            y: col * refs.height + refs.height * 0.5,
            type: 'static'
          }))
          frontEntity.physics.addCircle({
            radius: refs.tileSize * 0.5,
            density: 10
          })

          refs.cardEntities.push(backEntity)
          refs.cardEntities.push(frontEntity)

          cellIndex++
        }
      }
    }

    refs.start()

    // ----------------------------------------------------- audioManager entity

    refs.audioManager = engine.entities.add({ tag: 'audio-manager' })
    refs.audioManager.addComponent(engine.transform.addTransformComponent())
    refs.audioManager.addComponent(engine.audio.addAudioSourceComponent({ clip: refs.clipCorrect }))

    // ---------------------------------------------------------- pointer entity

    refs.pointerColider = engine.entities.add({ tag: 'pointer' })
    refs.pointerColider.addComponent(engine.transform.addTransformComponent())
    refs.pointerColider.addComponent(engine.physics.addPhysicsComponent({
      x: -999999,
      y: -999999
    }))

    refs.pointerColider.physics.addCircle({
      radius: 30,
      isSensor: true
    })

    refs.pointerColider.physics.onContactBegin = function (pointer, card) {
      if (refs.interactionEnabled) {
        if (refs.answered && !refs.isCorrect) {
          refs.tempFlipped.forEach((card) => {
            card.sprite.visible = false
            card.flipped = !card.flipped
          })
          refs.tempFlipped = []
          refs.answered = false
        }

        if (refs.answered && refs.isCorrect) {
          refs.tempFlipped = []
          refs.answered = false
        }

        if (!card.flipped && refs.tempFlipped.length < 2) {
          card.audio.play()
          card.sprite.visible = true
          card.flipped = !card.flipped
          refs.tempFlipped.push(card)
        }
        // two cards
        if (refs.tempFlipped.length === 2) {
          refs.answered = true
          // correct
          if (refs.tempFlipped[0].letter === refs.tempFlipped[1].letter) {
            refs.flipped.push(refs.tempFlipped[0])
            refs.flipped.push(refs.tempFlipped[1])
            // refs.tempFlipped[0].transform.scale = 0.5
            // refs.tempFlipped[1].transform.scale = 0.5
            refs.audioManager.audio.play('correct')
            refs.isCorrect = true
          } else {
            refs.isCorrect = false
          }
        }
        if (refs.flipped.length === (refs.rows * refs.cols)) {
          refs.interactionEnabled = false
          refs.audioManager.audio.play('win')
          setTimeout(() => {
            engine.scene.requestSwitch()
          }, 2000)
        }
      }
    }
  },
  update: (engine, refs) => {
    if (refs.key1.start) {
      refs.audioManager.audio.play('a')
      // engine.scene.switch(Scene1)
    }

    if (refs.key2.start) {
      refs.audioManager.audio.play('correct')
      // engine.scene.switch(Scene2)
    }

    if (refs.key3.start) {
      refs.audioManager.audio.play('win')
    }

    if (refs.pointer1.start) {
      refs.pointerColider.physics.setPosition({
        x: refs.pointer1.x,
        y: refs.pointer1.y
      })
    }

    if (refs.pointer1.end) {
      refs.pointerColider.physics.setPosition({
        x: -999999,
        y: -999999
      })
    }
  },
  draw: (engine, refs) => {
    debug(engine, refs)
  }
})

const Scene2 = new Harmony.Scene({
  create: async (engine, refs) => {
    await engine.audio.loadClip({ name: 'correct', url: './assets/audio/correct.wav' })
    await engine.audio.loadClip({ name: 'win', url: './assets/audio/win.wav' })

    refs.key1 = engine.keys.add({ key: '1' })
    refs.key2 = engine.keys.add({ key: '2' })

    refs.entity = engine.entities.add({ tag: 'audio-manager' })
    refs.entity.addComponent(engine.transform.addTransformComponent())
    refs.entity.addComponent(engine.audio.addAudioSourceComponent())
  },
  update: (engine, refs) => {
    if (refs.key1.start) {
      refs.entity.audio.play('win')
    }

    if (refs.key2.start) {
      refs.entity.audio.play('correct')
    }
  },
  draw: (engine, refs) => {
    debug(engine, refs)
  }
})

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(Scene1)

window.onerror = function (msg, url, linenumber) {
  window.alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
  return true
}
