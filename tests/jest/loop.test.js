/* global describe it expect  */

const Invent = require('../../dist/invent')

const loop = new Invent.Loop()
let stepped = false
loop.onStep = () => {
  stepped = true
}

describe('Loop', () => {
  it('should have correct inital values', () => {
    expect(loop.delta).toBe(0)
    expect(loop.fps).toBe(60)
    expect(loop.frame).toBe(0)
    expect(loop.paused).toBe(false)
    expect(loop.timestep).toBe(1000 / 60)
  })
  it('should increment the frame number and update last time on step() and execute the onStep() function', function () {
    loop.step()
    expect(loop.frame).toBe(1)
    expect(stepped).toBe(true)
  })
  it('should stop execution', () => {
    loop.pause()
    expect(loop.paused).toBe(true)
  })
})
