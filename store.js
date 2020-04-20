import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialParureId = Math.floor(Math.random() * 1000);

const initialParureContent = {
  duvet: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/couette.png',
    imageItem: '/static/Bed/escale/couette.png',
    id: 1,
  },
  flatSheet: { image: '', name: 'Aucun', id: 0 },
  fittedSheet: { image: '', name: 'Aucun', id: 0 },
  smallPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/small.png',
    imageItem: '/static/Bed/escale/small.png',
    id: 1,
  },
  centerPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/center.png',
    imageItem: '/static/Bed/escale/center.png',
    id: 1,
  },
  mediumPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/medium.png',
    imageItem: '/static/Bed/escale/medium.png',
    id: 1,
  },
  bigPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/big.png',
    imageItem: '/static/Bed/escale/big.png',
    id: 1,
  },
};

const initialState = {
  parures: [{ parureId: initialParureId }],
  idLog: '',
  activeParure: { parureContent: initialParureContent },
  activeParureId: initialParureId,
  initialParureContent,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'saveParure':
      return {
        ...state,
        parures: action.parures,
      };
    case 'updateLog':
      return {
        ...state,
        idLog: action.idLog,
      };
    case 'activeParure':
      return {
        ...state,
        activeParure: action.activeParure,
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware()),
);
