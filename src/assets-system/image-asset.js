/* global Image */

const ImageAsset = function (name, type, url) {
  this.name = name
  this.type = type
  this.url = url
  this.content = null
}

ImageAsset.prototype.load = function () {
  const image = new Image()
  image.onload = () => {
    this.content = image
    this.success(this)
  }
  image.onerror = () => {
    this.error()
  }
  image.src = this.url
}

ImageAsset.prototype.success = function () {}

ImageAsset.prototype.error = function () {}

export default ImageAsset
