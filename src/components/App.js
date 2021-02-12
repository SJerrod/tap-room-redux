import React from 'react';
import KegControl from './KegControl';

function App() {
  return (
    <>
      <div className='container container-fluid'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container container-fluid'>
            <h1><em>Bar Bar</em></h1>
            <footer><em>A bar for true connoisseur's</em></footer>
          </div>
        </div>
        <h4>Current Beer Selection</h4>
        <KegControl />
      </div>
    </>
  );
}

export default App;