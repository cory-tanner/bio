import React from 'react';
import '../styles/components/hero.css';
import Socials from './modules/socials';


// Stateless React Component
const Hero = () => (
  <header className="hero">
    <h1 className="t-display hero__display"><span>Cory</span> <span>Tanner</span></h1>
    <h2 className="t-sub-display hero__sub-display">
      Senior 
      <span className="hero__sub-display__enhanced"> UX Developer</span>
    </h2>
    <Socials />
  </header>
)

export default Hero;