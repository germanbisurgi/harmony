import AssetsSystem from './assets-system/'
import KeySystem from './key-system'
import LoopSystem from './loop-system/'
import PointerSystem from './pointer-system'
import StateSystem from './state-system/'
import RenderSystem from './render-system/'

const Engine = function (config) {
  this.assets = new AssetsSystem()
  this.keys = new KeySystem()
  this.loop = new LoopSystem()
  this.pointers = new PointerSystem()
  this.state = new StateSystem()
  this.render = new RenderSystem(config.render)

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
      this.render.draw()
    }
  }
  this.loop.run()
}

export default Engine
