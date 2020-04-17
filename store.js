import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialParureId = Math.floor(Math.random() * 1000);

const initialState = {
  parure: [{parureId : initialParureId}],
  idLog: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'saveParure':
      return {
        ...state,
        parure: action.parure
      }
      case 'updateLog':
      return {
        ...state,
        idLog: action.idLog
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
