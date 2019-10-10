import React from 'react';
import '../styles/components/main.css';
import SectionAboutMe from './modules/sectionAboutMe';
import SectionBlogPosts from './modules/sectionBlogPosts';


// Stateless React Component
const Main = () => (
  <main className="main">
    <SectionAboutMe />
    <SectionBlogPosts />
  </main>
)

export default Main;