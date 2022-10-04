import { FETCH_PRODUCTS_FAIELD, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCC } from '../constants/productConstants';

// action creator
export function getAllProducts(dispatch) {
  const apiUrl = 'https://fakestoreapi.com/products';
  dispatch(fetchProductsStart());
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchProductsSucc(data));
    })
    .catch(error => {
      dispatch(fetchProductsFailed(error));
    });
}

export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START
});

export const fetchProductsSucc = data => ({
  type: FETCH_PRODUCTS_SUCC,
  payload: data
});

export const fetchProductsFailed = errorMessage => ({
  type: FETCH_PRODUCTS_FAIELD,
  payload: errorMessage
});
