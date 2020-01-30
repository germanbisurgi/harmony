import State from './state'

const StateSystem = function () {
  this.current = null
  this.cache = []
  this.requested = null
}

StateSystem.prototype.add = function (name, config) {
  const state = new State(name, config)
  this.cache.push(state)
}

StateSystem.prototype.getByName = function (stateName) {
  let output = false
  this.cache.forEach(function (state) {
    if (state.name === stateName) {
      output = state
    }
  })
  return output
}

StateSystem.prototype.switch = function (stateName) {
  this.requested = stateName
}

StateSystem.prototype.update = function () {
  if (this.requested) {
    this.current = this.getByName(this.requested)
    this.requested = null
  }
}

export default StateSystem
