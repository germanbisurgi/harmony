/* global Harmony */

const Engine = function (canvas) {
  this.assets = new Harmony.AssetsSystem()
  this.keys = new Harmony.KeySystem()
  this.loop = new Harmony.LoopSystem()
  this.pointers = new Harmony.PointerSystem(canvas)
  this.state = new Harmony.StateSystem()
  this.render = new Harmony.RenderSystem(canvas)
  this.entities = new Harmony.EntitySystem()
  this.physycs = new Harmony.PhysycsSystem()

  this.loop.onStep = () => {
    this.state.update()
    if (!this.state.current.preloaded) {
      this.state.current.preloaded = true
      this.state.current.preload(this)
      this.assets.load()
    }
    if (!this.state.current.created && !this.assets.loading) {
      this.state.current.created = true
      this.state.current.create(this)
    }
    if (this.state.current.created) {
      this.keys.update(this.loop.delta, this.loop.frame)
      this.pointers.update(this.loop.delta, this.loop.frame)
      this.state.current.update(this)
      this.render.draw(this.entities.cache)
      this.state.current.draw(this)
    }
  }
  this.loop.run()
}

export default Engine
