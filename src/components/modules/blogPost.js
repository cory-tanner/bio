import React from 'react'

const BlogPost = ({
  link = "",
  title = "",
  dateTime = "",
  date = ""
}) => (
  <a className="t-link blog-posts__link grid__item" data-grid-medium="10" href={link}>
    <span className="t-list-copy">{title}</span>
    <time className="t-list-date blog-post__link__date" dateTime={dateTime}>{date}</time>
  </a>
);

export default BlogPost;