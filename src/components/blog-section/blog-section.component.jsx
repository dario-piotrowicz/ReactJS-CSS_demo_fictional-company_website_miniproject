import React from 'react';
import './blog-section.styles.scss';
import blog from '../../assets/images/home/blog.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="content">
        <h4>January 1 1970</h4>
        <h2>Blog Post One</h2>
        <p>
          Super amazing blog post about something super amazing! Do you want to
          read something super amazing? check out our amazing blog post!
        </p>
        <Link className="btn" to="/blog">
          <FontAwesomeIcon icon={faChevronRight} /> Read Our Blog
        </Link>
      </div>
      <div className="image">
        <img src={blog} alt="people" />
      </div>
    </section>
  );
};

export default BlogSection;
