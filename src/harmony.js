import AudioSystem from './audio-system/audio-system'
import AudioSourceComponent from './audio-system/audio-source-component'
import Loader from './loader/loader'
import Engine from './engine/engine'
import Entity from './entity-system/entity'
import Helpers from './helpers/helpers'
import Key from './key-system/key'
import KeySystem from './key-system/key-system'
import LoopSystem from './loop-system/loop-system'
import Pointer from './pointer-system/pointer'
import PointerSystem from './pointer-system/pointer-system'
import SpriteComponent from './render-system/sprite-component'
import RenderSystem from './render-system/render-system'
import Scene from './scene-system/scene'
import SceneSystem from './scene-system/scene-system'
import ScriptComponent from './script-system/script-component'
import ScriptSystem from './script-system/script-system'
import StateComponent from './state-system/state-component'
import StateSystem from './state-system/state-system'
import TransformComponent from './transform-system/transform-component'
import TransformSystem from './transform-system/transform-system'
import EntitySystem from './entity-system/entity-system'
import PhysicsSystem from './physics-system/physics-system'
import PhysicsComponent from './physics-system/physics-component'

const Harmony = {
  AudioSystem: AudioSystem,
  AudioSourceComponent: AudioSourceComponent,
  Loader: Loader,
  Engine: Engine,
  Entity: Entity,
  EntitySystem: EntitySystem,
  Helpers: Helpers,
  Key: Key,
  KeySystem: KeySystem,
  LoopSystem: LoopSystem,
  PhysicsComponent: PhysicsComponent,
  PhysicsSystem: PhysicsSystem,
  Pointer: Pointer,
  PointerSystem: PointerSystem,
  SpriteComponent: SpriteComponent,
  RenderSystem: RenderSystem,
  Scene: Scene,
  SceneSystem: SceneSystem,
  ScriptComponent: ScriptComponent,
  ScriptSystem: ScriptSystem,
  StateComponent: StateComponent,
  StateSystem: StateSystem,
  TransformComponent: TransformComponent,
  TransformSystem: TransformSystem
}

export default Harmony
