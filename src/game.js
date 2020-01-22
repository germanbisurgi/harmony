import Loop from './loop'

const Game = function () {
  this.loop = new Loop()

  this.loop.onStep = function () {
    console.log('onStep')
  }

  this.loop.run()
}

export default Game
