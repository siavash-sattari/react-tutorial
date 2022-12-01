import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { productAdd } from '../../redux/actions/productActions';

export const ProductAdd = () => {
  const dispatch = useDispatch();
  const id = useRef();
  const title = useRef();
  const price = useRef();

  const save = () => {
    let item = {};
    item.id = id.current.value;
    item.title = title.current.value;
    item.price = price.current.value;
    dispatch(productAdd(item));
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <div>
        Id : <input ref={id} />
      </div>
      <div>
        Title : <input ref={title} />
      </div>
      <div>
        Price : <input ref={price} />
      </div>
      <button onClick={() => save()}>Save</button>
    </div>
  );
};
