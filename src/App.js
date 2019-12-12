import React from 'react';
import './App.css';
import Hero from './components/hero';
import Main from './components/main';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154481477-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Hero />
      <Main />
    </div>
  );
}

export default App;
