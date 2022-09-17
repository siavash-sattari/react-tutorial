import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Header text='Practical App' />
      <Header text={true} />
      <div className='container'>
        <h1>This is test message</h1>
      </div>
    </>
  );
};

export default App;
