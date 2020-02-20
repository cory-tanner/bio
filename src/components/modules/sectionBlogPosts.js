import React from 'react';
import BlogPost from './blogPost'

const SectionBlogPosts = () => (
  <section className="blog-posts grid">
    <h3 className="t-section-heading blog-posts__heading grid__item" data-grid-small="12">Blog Posts</h3>

    <BlogPost
      link="https://dockyard.com/blog/2019/12/05/know-the-code-how-design-and-engineering-team-up-for-design-qa"
      title="narwin-grid: Harmony Between CSS Grid and Data Attributes"
      dateTime="2019-04-17T16:20:44.288Z"
      date="December 5, 2019" /> 

    <BlogPost
      link="https://dockyard.com/blog/2019/04/17/narwin-grid-harmony-between-css-grid-and-data-attributes"
      title="Know the Code: How Design and Engineering Team Up for Design QA"
      dateTime="2019-12-05T18:03:08.082Z"
      date="April 17, 2019" />

    <BlogPost
      link="https://dockyard.com/blog/2017/08/01/svg-assets-in-pwas"
      title="SVG Assets in PWAs"
      dateTime="2017-08-01T08:00:00.000Z"
      date="August 1, 2017" />

    <BlogPost
      link="https://dockyard.com/blog/2016/05/27/narwin-pack-the-postcss-package"
      title="Narwin-Pack: A PostCSS Package for DRY and Efficient CSS"
      dateTime="2016-05-27T04:00:00.000Z"
      date="May 27, 2016" />

    <BlogPost
      link="https://dockyard.com/blog/2016/02/11/transition-to-postcss"
      title="Why DockYard transitioned to PostCSS"
      dateTime="2016-02-11T05:00:00.000Z"
      date="February 11, 2016" />
    
    <BlogPost
      link="https://dockyard.com/blog/2015/09/02/clear-communication-through-html"
      title="Clear communication through HTML and GitHub"
      dateTime="2015-09-02T04:00:00.000Z"
      date="September 2, 2015" />

    <BlogPost
      link="https://dockyard.com/blog/2015/03/16/thriving-in-a-new-work-environment"
      title="Thriving in a New Work Environment"
      dateTime="2015-03-16T04:00:00.000Z"
      date="March 16, 2015" />
  </section>
)

export default SectionBlogPosts;