import React from 'react';
import './hero.styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Hero = ({ isBlog = false, isPost = false }) => {
  const title = isBlog || isPost ? 'Blog' : 'This Site Is Fictional';

  const backgroundUrl = `${isPost ? '.' : ''}./images/home/${
    isBlog || isPost ? 'blog' : 'showcase'
  }.jpg`;
  const backgroundStyle = {
    background: `url('${backgroundUrl}') no-repeat center center/cover`,
  };

  return (
    <section
      className={`hero ${isBlog || isPost ? 'blog' : ''}`}
      style={backgroundStyle}
    >
      <div className="content">
        <h1>{title}</h1>
        {isBlog || isPost ? null : (
          <>
            <p>We do not provide world class financial assistance!</p>
            <Link className="btn" to="/blog/post_about">
              <FontAwesomeIcon icon={faChevronRight} /> Read More
            </Link>
          </>
        )}
      </div>
    </section>
  );
};
Hero.propTypes = {
  isBlog: PropTypes.bool,
  isPost: PropTypes.bool,
};

export default Hero;
