import React from 'react';
import SideProject from './sideProject';

const SectionProjects = () => (
  <section className="projects grid">
    <h3 className="t-section-heading projects__heading grid__item" data-grid-small="12">Side Projects</h3>

    <SideProject
      link = "https://bitratecalc.com"
      imgURL = "./images/bitratecalc.jpg"
      alt = "Bitrate Calc side project"
      name = "Bitratecalc.com" />
  </section>
)

export default SectionProjects;