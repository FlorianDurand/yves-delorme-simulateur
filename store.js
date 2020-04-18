import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialParureId = Math.floor(Math.random() * 1000);

const initialParureContent = {
  duvet : { image: '/static/Bed/couette2.png', name: 'Aucun', id: '1' },
  flatSheet : { image: '', name: 'Aucun', id: '0' },
  fittedSheet : { image: '', name: 'Aucun', id: '0' },
  smallPillow : { image: '/static/Bed/petitcoussin2.png', name: 'Aucun', id: '1' },
  centerPillow : { image: '/static/Bed/centrecoussin.png', name: 'Aucun', id: '1' },
  mediumPillow : { image: '/static/Bed/moyencoussin.png', name: 'Aucun', id: '1' },
  bigPillow : { image: '/static/Bed/groscoussin.png', name: 'Aucun', id: '1' }
}

const initialState = {
  parures: [{parureId : initialParureId}],
  idLog: '',
  activeParure: initialParureContent,
  initialParureContent : initialParureContent
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'saveParure':
      return {
        ...state,
        parures: action.parures
      }
    case 'updateLog':
      return {
        ...state,
        idLog: action.idLog
      }
    case 'activeParure':
      return {
        ...state,
        activeParure: action.activeParure
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
