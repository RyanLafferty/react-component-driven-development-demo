import React from 'react';
import ExampleComponentIndividual from 'component-1';
import HeadshotIndividual from 'component-2';
import { Headshot, ExampleComponent } from 'combined-library';
import headshot from './headshot-compressed.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <ExampleComponentIndividual />
      <HeadshotIndividual headshot={headshot} />
      <ExampleComponent />
      <Headshot headshot={headshot} />
    </div>
  );
}

export default App;
