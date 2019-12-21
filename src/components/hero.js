import React from 'react';
import Socials from './modules/socials';
import MountainsSvg from './modules/mountainsSvg';

const Hero = () => (
  <header className="hero">
    <h1 className="t-display hero__display"><span>Cory</span> <span>Tanner</span></h1>
    <h2 className="t-sub-display hero__sub-display">Senior UX Developer</h2>
    <Socials />
    <MountainsSvg />
  </header>
)

export default Hero;