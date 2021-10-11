import { createGlobalState } from 'react-hooks-global-state'

const initalState = { isDarakMode: true }

export const { useGlobalState } = createGlobalState(initalState)
