import React from 'react'

const SideProject = ({
  link = "",
  imgURL = "",
  alt = "",
  name = ""
}) => (
  <a className="projects__link grid__item" data-grid-small="12" data-grid-medium="6" data-grid-large="6" href={link}>
    <img className="projects__link__img" src={imgURL} alt={alt}></img>
    <span className="t-body projects__link__name">{name}</span>
  </a>
);

export default SideProject;