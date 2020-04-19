/* global Harmony debug */

const BehavioursScene = new Harmony.Scene({
  create: (engine) => {
    const entity = engine.entities.add({ x: 150, y: 150 })

    engine.behaviours.addBehaviourComponent(entity, {
      onStart: (engine, entity) => {
        console.log('onStart', engine, entity)
      },
      onUpdate: (engine, entity) => {
        // console.log('onUpdate', engine, entity)
      }
    })
  },
  draw: (engine) => {
    debug(engine)
  }
})
