import { FETCH_PRODUCTS_SUCC, FETCH_PRODUCTS_START, FETCH_PRODUCTS_FAIELD } from '../constants/productConstants';

const initialState = {
  items: [],
  isLoading: true,
  message: ''
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { items: [], message: '', isLoading: true };
    case FETCH_PRODUCTS_SUCC:
      return { items: action.payload, message: '', isLoading: false };
    case FETCH_PRODUCTS_FAIELD:
      return { items: [], message: action.payload, isLoading: false };
    default:
      return state;
  }
}

export { productReducer };
