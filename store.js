import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialParureId = Math.floor(Math.random() * 1000);

const initialParureContent = {
  duvet : {
  name: 'Escale',
  image: '/static/Bed/couette2.png',
  material: 'Percale',
  grammage: '120 fils/cm²',
  imageItem: '/static/Bed/couette2.png',
  id: '1',
  },
  flatSheet : { image: '', name: 'Aucun', id: '0' },
  fittedSheet : { image: '', name: 'Aucun', id: '0' },
  smallPillow : {
    name: 'Escale',
    image: '/static/Bed/petitcoussin.png',
    material: 'Percale',
    grammage: '120 fils/cm²',
    imageItem: '/static/Bed/petitcoussin.png',
    id: '1',
  },
  centerPillow : {
    name: 'Escale',
    image: '/static/Bed/centrecoussin.png',
    material: 'Percale',
    grammage: '120 fils/cm²',
    imageItem: '/static/Bed/centrecoussin.png',
    id: '1',
  },
  mediumPillow : {
    name: 'Palmea',
    image: '/static/Bed/moyencoussin.png',
    material: 'Percale',
    grammage: '120 fils/cm²',
    imageItem: '/static/Bed/moyencoussin.png',
    id: '1',
  },
  bigPillow : {
    name: 'Ecume Céladonn',
    image: '/static/Bed/groscoussin.png',
    material: 'Percale',
    grammage: '120 fils/cm²',
    imageItem: '/static/Bed/groscoussin.png',
    id: '1',
  }
}

const initialState = {
  parures: [{parureId : initialParureId}],
  idLog: '',
  activeParure: {parureContent : initialParureContent},
  activeParureId: initialParureId,
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
