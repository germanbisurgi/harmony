import AssetsSystem from './assets-system/assets-system'
import Engine from './engine/engine'
import GameObject from './game-objects/game-object'
import Key from './key-system/key'
import KeySystem from './key-system/key-system'
import LoopSystem from './loop-system/loop-system'
import Pointer from './pointer-system/pointer'
import PointerSystem from './pointer-system/pointer-system'
import Renderable from './render-system/renderable'
import RenderSystem from './render-system/render-system'
import StateSystem from './state-system/state-system'
import ImageAsset from './assets-system/image-asset'
import AudioAsset from './assets-system/audio-asset'
import AudioBufferAsset from './assets-system/audio-buffer-asset'
import JSONAsset from './assets-system/json-asset'
import State from './state-system/state'

const Harmony = {
  ImageAsset: ImageAsset,
  AudioAsset: AudioAsset,
  AudioBufferAsset: AudioBufferAsset,
  JSONAsset: JSONAsset,
  AssetsSystem: AssetsSystem,
  Engine: Engine,
  GameObject: GameObject,
  Key: Key,
  KeySystem: KeySystem,
  LoopSystem: LoopSystem,
  Pointer: Pointer,
  PointerSystem: PointerSystem,
  Renderable: Renderable,
  RenderSystem: RenderSystem,
  State: State,
  StateSystem: StateSystem
}

export default Harmony
