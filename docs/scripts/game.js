/* global Harmony LoadScene AudioScene MemoryScene StateScene InputsScene PhysicsScene EntityScene */

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(LoadScene)

// --------------------------------------------------------------------- loading

const percent = document.querySelector('#percent')
const assets = document.querySelector('#assets')

engine.loader.onStart = () => {}

engine.loader.onSuccess = (asset) => {
  const p = document.createElement('p')
  p.innerText = asset.url
  assets.insertBefore(p, assets.firstChild)
}

engine.loader.onError = (asset) => {
}

engine.loader.onProgress = (progress) => {
  percent.innerText = progress
}

engine.loader.onComplete = () => {
  document.querySelector('#loading').classList.add('hidden')
}

// -------------------------------------------------------------------------- ui

const audio = document.querySelector('#audio')
const state = document.querySelector('#state')
const memory = document.querySelector('#memory')
const inputs = document.querySelector('#inputs')
const physics = document.querySelector('#physics')
const entity = document.querySelector('#entity')

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

physics.addEventListener('click', function () {
  engine.scene.switch(PhysicsScene)
})

entity.addEventListener('click', function () {
  engine.scene.switch(EntityScene)
})
