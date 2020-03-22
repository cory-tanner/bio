import React from 'react';
import SVGIcon from './SVGIcon';

const SectionAboutMe = () => (
  <section className="about-me grid">
    <div className="grid__item" data-grid-medium="7" data-grid-large="8">
      <h3 className="t-section-heading about-me__heading">What I Do</h3>
      <p className="t-body about-me__copy">Hi! I’m a Senior User Experience Developer that focuses/specializes on the usability of applications. I believe that the user experience of an application should impact the development process and practices we as developers use in our daily routines.</p>
      <p className="t-body about-me__copy">I aim to always develop for the user and do what is best for their experience on the web. All while developing with the latest tools and keeping a simplistic/modern approach.</p>
      
      <h3 className="t-section-heading about-me__heading about-me__heading--worked">Worked With</h3>
      <div className="about-me__logos">
        <SVGIcon name="netflix" className="about-me__logo about-me__logo--netflix" />
        <SVGIcon name="apple" className="about-me__logo about-me__logo--apple" />
        <SVGIcon name="zipcar" className="about-me__logo about-me__logo--zipcar" />
      </div>
    </div>
    <div className="grid__item" data-grid-medium="5" data-grid-large="4">
      <h3 className="t-section-heading about-me__heading">Skills</h3>
      <ul className="about-me__list">
        <li className="t-list-copy about-me__list__item">HTML/CSS/JS</li>
        <li className="t-list-copy about-me__list__item">Performance</li>
        <li className="t-list-copy about-me__list__item">Accessibility</li>
        <li className="t-list-copy about-me__list__item">Ember/React</li>
        <li className="t-list-copy about-me__list__item">Internationalization</li>
        <li className="t-list-copy about-me__list__item">UXD Tech Lead</li>
        <li className="t-list-copy about-me__list__item">Component Libraries</li>
      </ul>
    </div>
  </section>
)

export default SectionAboutMe;