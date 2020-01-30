/* eslint-disable no-undef */
const engine = new Engine()
engine.state.add('setup', setupState)
engine.state.switch('setup')
