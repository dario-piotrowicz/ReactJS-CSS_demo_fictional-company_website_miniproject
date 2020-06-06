import React from 'react';
import './blog-preview.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogPreview = ({
  imageSrc,
  title,
  author,
  date,
  paragraphs,
  url,
  blogStyle,
}) => {
  const dateStr = date.toDateString();
  return (
    <article className={`blog-preview style-${blogStyle ? blogStyle : 0}`}>
      <div className="image">
        <img src={imageSrc} alt="blog" />
      </div>
      <div className="content">
        <div className="content-text-preview">
          <h2>{title}</h2>
          <p className="meta">
            <FontAwesomeIcon className="fa-icon" icon={faUser} />
            Posted by <strong>{author}</strong> | {dateStr}
          </p>
          {paragraphs[0] ? <p>{paragraphs[0]}</p> : null}
          <Link className="btn" to={url}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} />
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};
BlogPreview.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  blogStyle: PropTypes.number,
};

export default BlogPreview;
