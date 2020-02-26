import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SideProject from './sideProject';

class SectionProjects extends Component {
  render () {
    return (
      <section className="projects grid">
        <h3 className="t-section-heading projects__heading grid__item" data-grid-small="12">Side Projects</h3>

        {this.props.projects.map((projects) =>
          <SideProject key={projects.id} projects={projects} />
        )}
      </section>
    )
  }
}

SectionProjects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default SectionProjects;