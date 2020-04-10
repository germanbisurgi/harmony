const Helpers = function () {}

Helpers.prototype.createGrid = function (rows, cols) {
  const grid = new Array(cols)
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows)
  }
  return grid
}

Helpers.prototype.getRandomInt = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

Helpers.prototype.getRandomItems = function (array, quantity) {
  const randomItems = []
  for (let i = quantity; i--;) {
    const randomIndex = this.getRandomInt(0, array.length - 1)
    randomItems.push(array[randomIndex])
    array.splice(randomIndex, 1)
  }
  return randomItems
}

Helpers.prototype.shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array
}

export default Helpers
