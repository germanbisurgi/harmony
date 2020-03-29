/* global Harmony */

const Engine = function (canvas) {
  // core
  this.loop = new Harmony.LoopSystem()
  this.scene = new Harmony.SceneSystem()
  this.render = new Harmony.RenderSystem(canvas)
  // systems
  this.audio = new Harmony.AudioSystem()
  this.assets = new Harmony.AssetsSystem()
  this.entities = new Harmony.EntitySystem()
  this.keys = new Harmony.KeySystem()
  this.physics = new Harmony.PhysicsSystem(canvas)
  this.pointers = new Harmony.PointerSystem(canvas)
  this.transform = new Harmony.TransformSystem()

  this.loop.onStep = async () => {
    if (this.scene.current) {
      if (this.scene.current.mustCreate) {
        // console.log('create')
        this.loop.pause()
        await this.scene.current.create(this, this.scene.current.refs)
        this.scene.current.requestUpdate()
        this.loop.continue()
      }
      if (this.scene.current.mustUpdate) {
        // console.log('update')
        this.keys.update()
        this.pointers.update()
        this.audio.update()
        this.transform.update()
        this.physics.update()
        this.entities.update()
        this.scene.current.update(this, this.scene.current.refs)
        this.scene.current.requestDraw()
      }
      if (this.scene.current.mustDraw) {
        // console.log('draw')
        this.render.draw()
        // this.physics.drawDebugData()
        this.scene.current.draw(this, this.scene.current.refs)
        this.scene.current.requestUpdate()
      }
    }
    if (this.scene.requested !== this.scene.current) {
      // console.log('switch')
      this.entities.destroy()
      this.pointers.destroy()
      this.keys.destroy()
      this.scene.current = this.scene.requested
      this.scene.current.requestCreate()
    }
  }
  this.loop.run()
}

export default Engine
