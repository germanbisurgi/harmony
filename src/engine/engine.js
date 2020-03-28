/* global Harmony */

const Engine = function (canvas) {
  this.audio = new Harmony.AudioSystem()
  this.assets = new Harmony.AssetsSystem()
  this.entities = new Harmony.EntitySystem()
  this.keys = new Harmony.KeySystem()
  this.loop = new Harmony.LoopSystem()
  this.physics = new Harmony.PhysicsSystem(canvas)
  this.pointers = new Harmony.PointerSystem(canvas)
  this.render = new Harmony.RenderSystem(canvas)
  this.transform = new Harmony.TransformSystem()
  this.scene = new Harmony.SceneSystem()

  this.loop.onStep = async () => {
    this.scene.update()
    if (!this.scene.current.created) {
      this.loop.pause()
      await this.scene.current.create(this, this.scene.current.refs)
      this.scene.current.created = true
      this.loop.continue()
    }
    if (this.scene.current.created) {
      this.keys.update()
      this.pointers.update()
      this.audio.update()
      this.transform.update()
      this.physics.update()
      this.scene.current.update(this, this.scene.current.refs)
      this.render.draw()
      this.physics.drawDebugData()
      this.scene.current.draw(this, this.scene.current.refs)
    }
  }
  this.loop.run()
}

export default Engine
