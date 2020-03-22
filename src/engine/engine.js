/* global Harmony */

const Engine = function (canvas) {
  this.assets = new Harmony.AssetsSystem()
  this.keys = new Harmony.KeySystem()
  this.loop = new Harmony.LoopSystem()
  this.pointers = new Harmony.PointerSystem(canvas)
  this.state = new Harmony.StateSystem()
  this.render = new Harmony.RenderSystem(canvas)
  this.entities = new Harmony.EntitySystem()
  this.physics = new Harmony.PhysicsSystem(canvas)
  this.audio = new Harmony.AudioSystem()

  this.loop.onStep = async () => {
    this.state.update()
    if (!this.state.current.preloaded) {
      this.loop.pause()
      this.state.current.preloaded = true
      await this.state.current.preload(this)
      this.loop.continue()
    }
    if (!this.state.current.created) {
      this.state.current.created = true
      this.state.current.create(this)
    }
    if (this.state.current.created) {
      this.keys.update(this.loop.delta, this.loop.frame)
      this.pointers.update(this.loop.delta, this.loop.frame)
      this.audio.update()
      this.physics.update()
      this.state.current.update(this)
      this.render.draw()
      this.physics.drawDebugData()
      this.state.current.draw(this)
    }
  }
  this.loop.run()
}

export default Engine
