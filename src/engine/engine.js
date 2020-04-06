/* global Harmony */

const Engine = function (canvas) {
  // core
  this.loop = new Harmony.LoopSystem()
  this.scene = new Harmony.SceneSystem()
  this.render = new Harmony.RenderSystem(canvas)
  this.audio = new Harmony.AudioSystem()
  this.entities = new Harmony.EntitySystem()
  this.keys = new Harmony.KeySystem()
  this.physics = new Harmony.PhysicsSystem(canvas)
  this.pointers = new Harmony.PointerSystem(canvas)
  this.transform = new Harmony.TransformSystem()
  this.scripts = new Harmony.ScriptSystem()

  this.loop.onStep = async () => {
    if (this.scene.current) {
      if (this.scene.mustCreate) {
        this.loop.pause()
        this.scene.requestUpdate()
        await this.scene.current.create(this)
        this.loop.continue()
      }
      if (this.scene.mustUpdate) {
        this.scene.requestDraw()
        this.keys.update()
        this.pointers.update()
        this.audio.update()
        this.transform.update()
        this.physics.update()
        this.entities.update()
        this.scripts.update(this)
        this.scene.current.update(this)
      }
      if (this.scene.mustDraw) {
        this.scene.requestUpdate()
        this.render.draw()
        this.physics.drawDebugData()
        this.scene.current.draw(this)
      }
    }
    if (this.scene.mustSwitch) {
      this.entities.destroy()
      this.pointers.destroy()
      this.keys.destroy()
      this.scene.current = this.scene.requested
      this.scene.requestCreate()
    }
  }
  this.loop.run()
}

export default Engine
