/* global Harmony Scene0 */

const canvas = document.querySelector('#engine-canvas')
const engine = new Harmony.Engine(canvas)
engine.scene.switch(Scene0)

// window.onerror = function (msg, url, linenumber) {
//   window.alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
//   return true
// }
