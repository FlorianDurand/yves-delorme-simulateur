import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialParureId = Math.floor(Math.random() * 1000);

const initialParureContent = {
  duvet: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/couette.png',
    imageMenu: '/static/Bed/Menu/escale/couette.png',
    id: 1,
  },
  flatSheet: { image: '', name: 'Aucun', id: -1 },
  fittedSheet: { image: '', name: 'Aucun', id: -1 },
  smallPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/small.png',
    imageMenu: '/static/Bed/escale/small.png',
    id: 1,
  },
  centerPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/center.png',
    imageMenu: '/static/Bed/escale/center.png',
    id: 1,
  },
  mediumPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/medium.png',
    imageMenu: '/static/Bed/escale/medium.png',
    id: 1,
  },
  bigPillow: {
    name: 'Escale',
    material: 'Percale',
    grammage: '120 fils/cm²',
    image: '/static/Bed/escale/big.png',
    imageMenu: '/static/Bed/escale/big.png',
    id: 1,
  },
};

const initialBackgroundContent = {
  wall : {
    id: 1,
    imagePreview: '/static/Background/wall_preview_2.png',
    image: '/static/Background/wall_2.png',
  },
  floor : {
    id: 1,
    imagePreview: '/static/Background/floor_preview_2.png',
    image: '/static/Background/floor_2.png',
  },
  tete : {
    id: 1,
    imagePreview: '/static/Background/teteLit_preview_1.png',
    image: '/static/Background/teteLit_1.png',
  }
}

const initialState = {
  parures: [],
  idLog: '',
  activeParure: { parureContent: initialParureContent },
  initialParureId,
  initialParureContent,
  cart: [],
  paruresAddedToCart: [],
  activeBackground: {
    backgroundContent : initialBackgroundContent
  }
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
    case 'disconnect':
      return {
        ...state,
        idLog: action.idLog,
        parures: [],
        cart: [],
        paruresAddedToCart: [],
      };
    case 'activeParure':
      return {
        ...state,
        activeParure: action.activeParure,
      };
    case 'activeBackground':
      return {
        ...state,
        activeBackground: action.activeBackground,
      };
    case 'saveWantedParures':
      return {
        ...state,
        parures: action.parures,
      };
    case 'addToCart':
      return {
        ...state,
        cart: action.cart,
        paruresAddedToCart: action.paruresAddedToCart,
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
