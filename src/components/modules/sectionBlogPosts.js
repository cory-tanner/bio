import React from 'react';
import '../../styles/components/blog-posts.css';


// Stateless React Component
const SectionBlogPosts = () => (
  <section className="blog-posts">
    <h3 className="t-section-heading blog-posts__heading">Writing</h3>
    <a className="t-link t-list-copy blog-posts__link" href="https://dockyard.com/blog/2019/04/17/narwin-grid-harmony-between-css-grid-and-data-attributes">narwin-grid: Harmony Between CSS Grid and Data Attributes</a>
    <a className="t-link t-list-copy blog-posts__link" href="https://dockyard.com/blog/2017/08/01/svg-assets-in-pwas">SVG Assets in PWAs</a>
    <a className="t-link t-list-copy blog-posts__link" href="https://dockyard.com/blog/2016/05/27/narwin-pack-the-postcss-package">Narwin-Pack: A PostCSS Package for DRY and Efficient CSS</a>
    <a className="t-link t-list-copy blog-posts__link" href="https://dockyard.com/blog/2016/02/11/transition-to-postcss">Why DockYard transitioned to PostCSS</a>
    <a className="t-link t-list-copy blog-posts__link" href="https://dockyard.com/blog/2015/09/02/clear-communication-through-html">Clear communication through HTML and GitHub</a>
    <a className="t-link t-list-copy blog-posts__link" href="https://dockyard.com/blog/2015/03/16/thriving-in-a-new-work-environment">Thriving in a New Work Environment</a>
  </section>
)

export default SectionBlogPosts;