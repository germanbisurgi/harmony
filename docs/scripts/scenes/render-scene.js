/* global Harmony debug */

const RenderScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add({ x: 150, y: 150 })

    engine.render.addSpriteComponent(entity, {
      image: engine.render.get('question')
    })
  },
  draw: (engine) => {
    debug(engine)
  }
})
