import React from 'react';
import Socials from './modules/socials';
import MountainsSvg from './modules/mountainsSvg';

const Hero = () => (
  <header className="hero">
    <div className="hero__headings">
      <h1 className="t-display hero__headings__display">Cory Tanner</h1>
      <h2 className="t-sub-display hero__headings__sub-display">Senior UX Developer</h2>
    </div>
    <Socials />
    <MountainsSvg />
  </header>
)

export default Hero;