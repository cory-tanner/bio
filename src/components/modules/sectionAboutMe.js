import React from 'react';
import SVGIcon from './SVGIcon';

const SectionAboutMe = () => (
  <section className="about-me grid">
    <div className="grid__item" data-grid-medium="7">
      <h3 className="t-section-heading about-me__heading">My Adventure</h3>
      <p className="t-body about-me__copy">Hi! I’m a Frontend Developer that specializes in the usability of applications. I believe that the user experience of an application should impact the development process and practices we as developers use in our daily routines.</p>
      <p className="t-body about-me__copy">I aim to always develop for the user and do what is best for their experience on the web.</p>
    </div>
    <div className="grid__item about-me__skills" data-grid-medium="5" data-grid-large="4">
      <h4 className="t-section-sub-heading about-me__heading about-me__heading--skills">Talents</h4>
      <ul>
        <li className="t-list-copy about-me__list__item">HTML/CSS/JS</li>
        <li className="t-list-copy about-me__list__item">Accessibility</li>
        <li className="t-list-copy about-me__list__item">Ember/React</li>
        <li className="t-list-copy about-me__list__item">Internationalization</li>
        <li className="t-list-copy about-me__list__item">Component Libraries</li>
        <li className="t-list-copy about-me__list__item">Web3 Integrations</li>
      </ul>
    </div>
    <div className="grid__item">
      <h4 className="t-section-sub-heading about-me__heading">Worked With</h4>
      <div className="about-me__logos">
        <SVGIcon name="netflix" className="about-me__logo about-me__logo--netflix" />
        <SVGIcon name="rebud" className="about-me__logo about-me__logo--rebud" />
        <SVGIcon name="zipcar" className="about-me__logo about-me__logo--zipcar" />
        <SVGIcon name="apple" className="about-me__logo about-me__logo--apple" />
      </div>
    </div>
  </section>
)

export default SectionAboutMe;