import React from 'react';
import '../styles/components/main.css';
import SectionAboutMe from './modules/sectionAboutMe';
import SectionBlogPosts from './modules/sectionBlogPosts';
import SectionProjects from './modules/sectionProjects';

const Main = () => (
  <main className="main">
    <SectionAboutMe />
    <SectionBlogPosts />
    <SectionProjects />
  </main>
)

export default Main;