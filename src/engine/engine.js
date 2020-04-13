/* global Harmony */

const Engine = function (canvas) {
  this.loader = new Harmony.Loader()
  this.loop = new Harmony.LoopSystem()
  this.scene = new Harmony.SceneSystem()
  this.render = new Harmony.RenderSystem(canvas)
  this.audio = new Harmony.AudioSystem()
  this.entities = new Harmony.EntitySystem()
  this.keys = new Harmony.KeySystem()
  this.physics = new Harmony.PhysicsSystem(canvas)
  this.pointers = new Harmony.PointerSystem(canvas)
  this.scripts = new Harmony.ScriptSystem()
  this.state = new Harmony.StateSystem()
  this.helpers = new Harmony.Helpers()

  this.loop.onStep = async () => {
    if (this.scene.current) {
      if (this.scene.mustPreload) {
        if (!this.loader.loading) {
          this.scene.current.preload(this)
        }
        this.loader.update()
        if (this.loader.complete) {
          this.render.cache = this.loader.imagesCache
          this.audio.cache = this.loader.audioCache
          this.scene.requestCreate()
        }
      }
      if (this.scene.mustCreate) {
        this.scene.requestUpdate()
        this.scene.current.create(this)
      }
      if (this.scene.mustUpdate) {
        this.scene.requestDraw()
        this.keys.update()
        this.pointers.update()
        this.audio.update()
        this.physics.update()
        this.entities.update()
        this.scripts.update(this)
        this.state.update(this)
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
      this.scene.requestPreload()
    }
  }
  this.loop.run()
}

export default Engine
