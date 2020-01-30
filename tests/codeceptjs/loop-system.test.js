/* global describe it expect  */

const Engine = require('../../dist/engine')

const engine = new Engine()
let stepped = false
engine.loop.onStep = () => {
  stepped = true
}

describe('Loop', () => {
  it('should have correct inital values', () => {
    expect(engine.loop.delta).toBe(0)
    expect(engine.loop.fps).toBe(60)
    expect(engine.loop.frame).toBe(0)
    expect(engine.loop.paused).toBe(false)
    expect(engine.loop.timestep).toBe(1000 / 60)
  })
  it('should increment the frame number and update last time on step() and execute the onStep() function', function () {
    engine.loop.step()
    expect(engine.loop.frame).toBe(1)
    expect(stepped).toBe(true)
  })
  it('should stop execution', () => {
    engine.loop.pause()
    expect(engine.loop.paused).toBe(true)
  })
})
