/* global Harmony StateScene */

const LoadScene = new Harmony.Scene({
  preload: (engine) => {
    engine.loader.loadImage({ name: 'question', url: './assets/images/question.png' })
    engine.loader.loadImage({ name: 'a', url: './assets/images/alphabet/a.jpg' })
    engine.loader.loadImage({ name: 'b', url: './assets/images/alphabet/b.jpg' })
    engine.loader.loadImage({ name: 'c', url: './assets/images/alphabet/c.jpg' })
    engine.loader.loadImage({ name: 'd', url: './assets/images/alphabet/d.jpg' })
    engine.loader.loadImage({ name: 'e', url: './assets/images/alphabet/e.jpg' })
    engine.loader.loadImage({ name: 'f', url: './assets/images/alphabet/f.jpg' })
    engine.loader.loadImage({ name: 'g', url: './assets/images/alphabet/g.jpg' })
    engine.loader.loadImage({ name: 'h', url: './assets/images/alphabet/h.jpg' })
    engine.loader.loadImage({ name: 'i', url: './assets/images/alphabet/i.jpg' })
    engine.loader.loadImage({ name: 'j', url: './assets/images/alphabet/j.jpg' })
    engine.loader.loadImage({ name: 'k', url: './assets/images/alphabet/k.jpg' })
    engine.loader.loadImage({ name: 'l', url: './assets/images/alphabet/l.jpg' })
    engine.loader.loadImage({ name: 'm', url: './assets/images/alphabet/m.jpg' })
    engine.loader.loadImage({ name: 'n', url: './assets/images/alphabet/n.jpg' })
    engine.loader.loadImage({ name: 'o', url: './assets/images/alphabet/o.jpg' })
    engine.loader.loadImage({ name: 'p', url: './assets/images/alphabet/p.jpg' })
    engine.loader.loadImage({ name: 'q', url: './assets/images/alphabet/q.jpg' })
    engine.loader.loadImage({ name: 'r', url: './assets/images/alphabet/r.jpg' })
    engine.loader.loadImage({ name: 's', url: './assets/images/alphabet/s.jpg' })
    engine.loader.loadImage({ name: 't', url: './assets/images/alphabet/t.jpg' })
    engine.loader.loadImage({ name: 'u', url: './assets/images/alphabet/u.jpg' })
    engine.loader.loadImage({ name: 'v', url: './assets/images/alphabet/v.jpg' })
    engine.loader.loadImage({ name: 'w', url: './assets/images/alphabet/w.jpg' })
    engine.loader.loadImage({ name: 'x', url: './assets/images/alphabet/x.jpg' })
    engine.loader.loadImage({ name: 'y', url: './assets/images/alphabet/y.jpg' })
    engine.loader.loadImage({ name: 'z', url: './assets/images/alphabet/z.jpg' })
    engine.loader.loadImage({ name: 'arancia', url: './assets/images/things/arancia.jpg' })
    engine.loader.loadImage({ name: 'brucco', url: './assets/images/things/brucco.jpg' })
    engine.loader.loadImage({ name: 'cane', url: './assets/images/things/cane.jpg' })
    engine.loader.loadImage({ name: 'delfino', url: './assets/images/things/delfino.jpg' })
    engine.loader.loadImage({ name: 'elefante', url: './assets/images/things/elefante.jpg' })
    engine.loader.loadImage({ name: 'fiore', url: './assets/images/things/fiore.jpg' })
    engine.loader.loadImage({ name: 'gufo', url: './assets/images/things/gufo.jpg' })
    engine.loader.loadImage({ name: 'hotel', url: './assets/images/things/hotel.jpg' })
    engine.loader.loadImage({ name: 'isola', url: './assets/images/things/isola.jpg' })
    engine.loader.loadImage({ name: 'jeep', url: './assets/images/things/jeep.jpg' })
    engine.loader.loadImage({ name: 'koala', url: './assets/images/things/koala.jpg' })
    engine.loader.loadImage({ name: 'leone', url: './assets/images/things/leone.jpg' })
    engine.loader.loadImage({ name: 'maiale', url: './assets/images/things/maiale.jpg' })
    engine.loader.loadImage({ name: 'nave', url: './assets/images/things/nave.jpg' })
    engine.loader.loadImage({ name: 'orso', url: './assets/images/things/orso.jpg' })
    engine.loader.loadImage({ name: 'polpo', url: './assets/images/things/polpo.jpg' })
    engine.loader.loadImage({ name: 'quaderno', url: './assets/images/things/quaderno.jpg' })
    engine.loader.loadImage({ name: 'riccio', url: './assets/images/things/riccio.jpg' })
    engine.loader.loadImage({ name: 'serpente', url: './assets/images/things/serpente.jpg' })
    engine.loader.loadImage({ name: 'torre', url: './assets/images/things/torre.jpg' })
    engine.loader.loadImage({ name: 'uccello', url: './assets/images/things/uccello.jpg' })
    engine.loader.loadImage({ name: 'violino', url: './assets/images/things/violino.jpg' })
    engine.loader.loadImage({ name: 'waffle', url: './assets/images/things/waffle.jpg' })
    engine.loader.loadImage({ name: 'xilofono', url: './assets/images/things/xilofono.jpg' })
    engine.loader.loadImage({ name: 'yoghurt', url: './assets/images/things/yoghurt.jpg' })
    engine.loader.loadImage({ name: 'zebra', url: './assets/images/things/zebra.jpg' })

    engine.loader.loadAudio({ name: 'collision', url: './assets/audio/collision.wav' })
    engine.loader.loadAudio({ name: 'correct', url: './assets/audio/correct.wav' })
    engine.loader.loadAudio({ name: 'win', url: './assets/audio/win.wav' })
    engine.loader.loadAudio({ name: 'a', url: './assets/audio/alphabet/a.mp3' })
    engine.loader.loadAudio({ name: 'b', url: './assets/audio/alphabet/b.mp3' })
    engine.loader.loadAudio({ name: 'c', url: './assets/audio/alphabet/c.mp3' })
    engine.loader.loadAudio({ name: 'd', url: './assets/audio/alphabet/d.mp3' })
    engine.loader.loadAudio({ name: 'e', url: './assets/audio/alphabet/e.mp3' })
    engine.loader.loadAudio({ name: 'f', url: './assets/audio/alphabet/f.mp3' })
    engine.loader.loadAudio({ name: 'g', url: './assets/audio/alphabet/g.mp3' })
    engine.loader.loadAudio({ name: 'h', url: './assets/audio/alphabet/h.mp3' })
    engine.loader.loadAudio({ name: 'i', url: './assets/audio/alphabet/i.mp3' })
    engine.loader.loadAudio({ name: 'j', url: './assets/audio/alphabet/j.mp3' })
    engine.loader.loadAudio({ name: 'k', url: './assets/audio/alphabet/k.mp3' })
    engine.loader.loadAudio({ name: 'l', url: './assets/audio/alphabet/l.mp3' })
    engine.loader.loadAudio({ name: 'm', url: './assets/audio/alphabet/m.mp3' })
    engine.loader.loadAudio({ name: 'n', url: './assets/audio/alphabet/n.mp3' })
    engine.loader.loadAudio({ name: 'o', url: './assets/audio/alphabet/o.mp3' })
    engine.loader.loadAudio({ name: 'p', url: './assets/audio/alphabet/p.mp3' })
    engine.loader.loadAudio({ name: 'q', url: './assets/audio/alphabet/q.mp3' })
    engine.loader.loadAudio({ name: 'r', url: './assets/audio/alphabet/r.mp3' })
    engine.loader.loadAudio({ name: 's', url: './assets/audio/alphabet/s.mp3' })
    engine.loader.loadAudio({ name: 't', url: './assets/audio/alphabet/t.mp3' })
    engine.loader.loadAudio({ name: 'u', url: './assets/audio/alphabet/u.mp3' })
    engine.loader.loadAudio({ name: 'v', url: './assets/audio/alphabet/v.mp3' })
    engine.loader.loadAudio({ name: 'w', url: './assets/audio/alphabet/w.mp3' })
    engine.loader.loadAudio({ name: 'x', url: './assets/audio/alphabet/x.mp3' })
    engine.loader.loadAudio({ name: 'y', url: './assets/audio/alphabet/y.mp3' })
    engine.loader.loadAudio({ name: 'z', url: './assets/audio/alphabet/z.mp3' })
    engine.loader.loadAudio({ name: 'arancia', url: './assets/audio/things/arancia.mp3' })
    engine.loader.loadAudio({ name: 'brucco', url: './assets/audio/things/brucco.mp3' })
    engine.loader.loadAudio({ name: 'cane', url: './assets/audio/things/cane.mp3' })
    engine.loader.loadAudio({ name: 'delfino', url: './assets/audio/things/delfino.mp3' })
    engine.loader.loadAudio({ name: 'elefante', url: './assets/audio/things/elefante.mp3' })
    engine.loader.loadAudio({ name: 'fiore', url: './assets/audio/things/fiore.mp3' })
    engine.loader.loadAudio({ name: 'gufo', url: './assets/audio/things/gufo.mp3' })
    engine.loader.loadAudio({ name: 'hotel', url: './assets/audio/things/hotel.mp3' })
    engine.loader.loadAudio({ name: 'isola', url: './assets/audio/things/isola.mp3' })
    engine.loader.loadAudio({ name: 'jeep', url: './assets/audio/things/jeep.mp3' })
    engine.loader.loadAudio({ name: 'koala', url: './assets/audio/things/koala.mp3' })
    engine.loader.loadAudio({ name: 'leone', url: './assets/audio/things/leone.mp3' })
    engine.loader.loadAudio({ name: 'maiale', url: './assets/audio/things/maiale.mp3' })
    engine.loader.loadAudio({ name: 'nave', url: './assets/audio/things/nave.mp3' })
    engine.loader.loadAudio({ name: 'orso', url: './assets/audio/things/orso.mp3' })
    engine.loader.loadAudio({ name: 'polpo', url: './assets/audio/things/polpo.mp3' })
    engine.loader.loadAudio({ name: 'quaderno', url: './assets/audio/things/quaderno.mp3' })
    engine.loader.loadAudio({ name: 'riccio', url: './assets/audio/things/riccio.mp3' })
    engine.loader.loadAudio({ name: 'serpente', url: './assets/audio/things/serpente.mp3' })
    engine.loader.loadAudio({ name: 'torre', url: './assets/audio/things/torre.mp3' })
    engine.loader.loadAudio({ name: 'uccello', url: './assets/audio/things/uccello.mp3' })
    engine.loader.loadAudio({ name: 'violino', url: './assets/audio/things/violino.mp3' })
    engine.loader.loadAudio({ name: 'waffle', url: './assets/audio/things/waffle.mp3' })
    engine.loader.loadAudio({ name: 'xilofono', url: './assets/audio/things/xilofono.mp3' })
    engine.loader.loadAudio({ name: 'yoghurt', url: './assets/audio/things/yoghurt.mp3' })
    engine.loader.loadAudio({ name: 'zebra', url: './assets/audio/things/zebra.mp3' })
  },
  update: (engine) => {
    engine.scene.switch(PhysicsScene)
  }
})
