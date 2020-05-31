import React from 'react';
import './hero.styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>The Sky Is The Limit</h1>
        <p>We provide world class financial assistance</p>
        <Link className="btn" to="/about">
          <FontAwesomeIcon icon={faChevronRight} /> Read More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
