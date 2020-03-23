import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends Component {
  render () {
    const { link, title, dateTime, date } = this.props.posts;
    return (
      <a className="t-link blog-posts__link grid__item" data-grid-medium="6" href={ link }>
        <span className="t-list-blog">{ title }</span>
        <time className="t-list-date blog-post__link__date" dateTime={ dateTime }>{ date }</time>
      </a>
    )
  }
}

BlogPost.propTypes = {
  posts: PropTypes.object.isRequired
}

export default BlogPost;