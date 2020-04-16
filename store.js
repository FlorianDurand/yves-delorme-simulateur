import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  parure: [{parureId : 1}]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'saveParure':
      return {
        ...state,
        parure: action.parure
      }
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
