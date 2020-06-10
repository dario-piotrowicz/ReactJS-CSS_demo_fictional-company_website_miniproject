import React from 'react';
import './team-section.styles.scss';
import PropTypes from 'prop-types';

const PersonItem = ({ imageSrc, name, position }) => {
  return (
    <div className="person">
      <img src={imageSrc} alt="case" />
      <h4>{name}</h4>
      <p>{position}</p>
    </div>
  );
};
PersonItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

const peopleDetails = [
  { imageSrc: './images/team/person1.jpg', name: 'John', position: 'President' },
  { imageSrc: './images/team/person2.jpg', name: 'She', position: 'Vice President' },
  { imageSrc: './images/team/person3.jpg', name: 'Coffee Guy', position: 'Marketing Head' },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <header>
        <h4>Who we are</h4>
        <h2>Our Professional Team</h2>
        <p>Meet our glorious team of non existing people</p>
      </header>
      <div className="people">
        {peopleDetails.map((person) => (
          <PersonItem key={`${person.name} - ${person.position}`} {...person} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
