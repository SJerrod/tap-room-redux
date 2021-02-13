import React from 'react';
import Header from './Header';
import KegControl from './KegControl';

function App() {
  return (
    <>
      <Header />
      <div className='container container-fluid'>
        <h4 className='menu'>Current Beer Selection</h4>
        <KegControl />
      </div>
    </>
  );
}

export default App;