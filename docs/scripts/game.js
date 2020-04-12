/* global Harmony LoadScene AudioScene MemoryScene StateScene InputsScene */

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(LoadScene)

// window.onerror = function (msg, url, linenumber) {
//   window.alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
//   return true
// }

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
