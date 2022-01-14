import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
          <About></About>        
      </main>
    </div>
  );
}

export default App;
