const JSONAsset = function (name, url) {
  this.name = name
  this.url = url
  this.content = null
}

JSONAsset.prototype.load = function () {
  const xhr = new window.XMLHttpRequest()
  xhr.open('GET', this.url, true)
  xhr.onload = () => {
    if (xhr.status === 200) {
      this.content = JSON.parse(xhr.response)
      this.success(this)
    } else {
      this.error()
    }
  }
  xhr.onerror = () => {
    this.error()
  }
  xhr.send()
}

JSONAsset.prototype.success = function () {}

JSONAsset.prototype.error = function () {}

export default JSONAsset
