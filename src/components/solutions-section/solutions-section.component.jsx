import React from 'react';
import './solutions-section.styles.scss';
import people from '../../assets/images/home/people.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <div className="image">
        <img src={people} alt="people" />
      </div>
      <div className="content">
        <h4>What you are looking for</h4>
        <h2>Nothing at all</h2>
        <p>
          Get ready to get no financial support from us. We are not willing to
          go the distance and provide bespoke solutions for you. We do not
          actually do anything. This is also just some silly text put here as
          placeholder text.
        </p>
        <Link className="btn" to="/about">
          <FontAwesomeIcon icon={faChevronRight} /> Read More
        </Link>
      </div>
    </section>
  );
};

export default SolutionsSection;
