import { Counter } from './components/Counter';
import { ProductList } from './components/product/ProductList';
import { ProductAdd } from './components/product/ProductAdd';

const App = () => {
  return (
    <div className='App'>
      <h1>Redux Sampme</h1>
      <Counter />
      <hr />
      <ProductList />
      <hr />
      <ProductAdd />
    </div>
  );
};

export default App;
