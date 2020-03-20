const AssetsSystem = function () {
  this.loaded = false
  this.errors = 0
  this.success = 0
  this.queue = []
  this.cache = []
}

AssetsSystem.prototype.add = function (_asset) {
  this.queue.push(_asset)
  return _asset.content
}

AssetsSystem.prototype.get = function (name) {
  for (let i = 0, len = this.cache.length; i < len; i++) {
    if (this.cache[i].name === name) {
      return this.cache[i].content
    }
  }
  return false
}

AssetsSystem.prototype.hasCompleted = function () {
  if (this.queue.length === this.success + this.errors) {
    this.queue = []
    this.loading = false
    return true
  } else {
    return false
  }
}

AssetsSystem.prototype.load = function () {
  if (this.queue.length > 0) {
    this.loading = true
    for (let i = 0, len = this.queue.length; i < len; i++) {
      this.queue[i].load()
      this.queue[i].success = (asset) => {
        this.cache.push(asset)
        this.success++
        this.hasCompleted()
      }
      this.queue[i].error = () => {
        this.errors++
        this.hasCompleted()
      }
    }
  }
}

export default AssetsSystem
