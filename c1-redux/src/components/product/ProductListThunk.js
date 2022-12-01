import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productRemove } from '../../redux/actions/productActions';
import { getAllProducts } from '../../redux-thunk/actions/productActions';

const ProductListThunk = () => {
  const products = useSelector(store => store.product.items);
  const isLoading = useSelector(store => store.product.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  return (
    <div>
      <h2>Products :</h2>
      {isLoading ? <div>loading data from server ...</div> : null}
      <ul className='product-list'>
        {products.map(item => (
          <li key={item.id}>
            <img src={item.image} alt='product image' className='product-image' />
            <p>
              {item.title.slice(0,15)} - {item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListThunk;
