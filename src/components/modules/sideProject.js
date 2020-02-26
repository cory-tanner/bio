import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SideProject extends Component {
  render () {
    const { link, imgURL, alt, name } = this.props.projects;
    
    return (
      <a className="projects__link grid__item" data-grid-small="12" data-grid-medium="6" data-grid-large="6" href={link}>
        <img className="projects__link__img" src={imgURL} alt={alt}></img>
        <span className="t-body projects__link__name">{name}</span>
      </a>
    )
  }
}

SideProject.propTypes = {
  projects: PropTypes.object.isRequired
}

export default SideProject;