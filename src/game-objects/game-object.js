import Transform from './transform'

const GameObject = function (_config) {
  this.transform = new Transform(_config)
}

export default GameObject
