import React from 'react';
import './hero.styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Hero = ({ isBlog = false }) => {
  const title = isBlog ? 'Blog' : 'This Site Is Fictional';

  return (
    <section className={`hero ${isBlog ? 'blog' : ''}`}>
      <div className="content">
        <h1>{title}</h1>
        {isBlog ? null : (
          <>
            <p>We do not provide world class financial assistance!</p>
            <Link className="btn" to="/about">
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
};

export default Hero;
