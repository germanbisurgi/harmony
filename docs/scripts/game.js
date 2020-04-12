/* global Harmony LoadScene AudioScene MemoryScene StateScene InputsScene */

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(LoadScene)

// --------------------------------------------------------------------- loading

const percent = document.querySelector('#percent')
const assets = document.querySelector('#assets')

engine.loader.onStart = () => {
  console.log('onstart')
}

engine.loader.onSuccess = (asset) => {
  const p = document.createElement('p')
  p.innerText = asset.url
  assets.insertBefore(p, assets.firstChild)
  console.log('onSuccess', asset)
}

engine.loader.onError = (asset) => {
  console.log('onerror', asset)
}

engine.loader.onProgress = (progress) => {
  percent.innerText = progress
  console.log('onprogress', progress)
}

engine.loader.onComplete = () => {
  document.querySelector('#loading').classList.add('hidden')
  console.log('oncomplete')
}

// -------------------------------------------------------------------------- ui

const audio = document.querySelector('#audio')
const state = document.querySelector('#state')
const memory = document.querySelector('#memory')
const inputs = document.querySelector('#inputs')

audio.addEventListener('click', function () {
  engine.scene.switch(AudioScene)
})

memory.addEventListener('click', function () {
  engine.scene.switch(MemoryScene)
})

state.addEventListener('click', function () {
  engine.scene.switch(StateScene)
})

inputs.addEventListener('click', function () {
  engine.scene.switch(InputsScene)
})
