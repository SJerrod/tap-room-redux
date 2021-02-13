import React from 'react';
import KegControl from './KegControl';

function App() {
  return (
    <>
      <div className='container container-fluid'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1><em>Bar's Bar</em></h1>
            <blockquote>Where a bar can be itself.</blockquote>
            <footer><em>"The only bar for true bar connoisseur's" ~ Drinkers Digest</em></footer>
          </div>
        </div>
        <h4>Current Beer Selection</h4>
        <KegControl />
      </div>
    </>
  );
}

export default App;