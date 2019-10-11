import React from 'react';
import '../../styles/components/blog-posts.css';


// Stateless React Component
const SectionBlogPosts = () => (
  <section className="blog-posts grid">
    <h3 className="t-section-heading blog-posts__heading grid__item" data-grid-small="12">Blog Posts</h3>
    <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href="https://dockyard.com/blog/2019/04/17/narwin-grid-harmony-between-css-grid-and-data-attributes">
      <span className="t-list-copy">narwin-grid: Harmony Between CSS Grid and Data Attributes</span>
      <time className="t-list-date blog-post__link__date" dateTime="2019-04-17T16:20:44.288Z">April 17, 2019</time>
    </a>
    <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href="https://dockyard.com/blog/2017/08/01/svg-assets-in-pwas">
      <span className="t-list-copy">SVG Assets in PWAs</span>
      <time className="t-list-date blog-post__link__date" dateTime="2017-08-01T08:00:00.000Z">August 1, 2017</time>
    </a>
    <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href="https://dockyard.com/blog/2016/05/27/narwin-pack-the-postcss-package">
      <span className="t-list-copy">Narwin-Pack: A PostCSS Package for DRY and Efficient CSS</span>
      <time className="t-list-date blog-post__link__date" dateTime="2016-05-27T04:00:00.000Z">May 27, 2016</time>
    </a>
    <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href="https://dockyard.com/blog/2016/02/11/transition-to-postcss">
      <span className="t-list-copy">Why DockYard transitioned to PostCSS</span>
      <time className="t-list-date blog-post__link__date" dateTime="2016-02-11T05:00:00.000Z">February 11, 2016</time>
    </a>
    <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href="https://dockyard.com/blog/2015/09/02/clear-communication-through-html">
      <span className="t-list-copy">Clear communication through HTML and GitHub</span>
      <time className="t-list-date blog-post__link__date" dateTime="2015-09-02T04:00:00.000Z">September 2, 2015</time>
    </a>
    <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href="https://dockyard.com/blog/2015/03/16/thriving-in-a-new-work-environment">
      <span className="t-list-copy">Thriving in a New Work Environment</span>
      <time className="t-list-date blog-post__link__date" dateTime="2015-03-16T04:00:00.000Z">March 16, 2015</time>
    </a>
  </section>
)

export default SectionBlogPosts;