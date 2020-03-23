import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BlogPost from './blogPost'

class SectionBlogPosts extends Component {

  render() {
    return (
      <section className="blog-posts grid">
        <h3 className="t-section-heading blog-posts__heading grid__item" data-grid-medium="12">Blog Posts</h3>
        {this.props.posts.map((posts) => 
          <BlogPost key={posts.id} posts={posts}/>
        )}
      </section>
    );
  }
}

SectionBlogPosts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default SectionBlogPosts;