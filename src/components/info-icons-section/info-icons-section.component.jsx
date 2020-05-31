import React from 'react';
import './info-icons-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversity,
  faBookReader,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const InfoIconItem = ({ faIcon, title, description }) => {
  return (
    <div className="info-icon-item">
      <span className="fa-icon">
        <FontAwesomeIcon icon={faIcon} size="2x" />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
InfoIconItem.propTypes = {
  faIcon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const infoDetails = [
  {
    faIcon: faUniversity,
    title: 'Investment Banking',
    description: `An investment bank is a financial services company or corporate
                  division that engages in advisory-based financial transactions
                  on behalf of individuals, corporations, and governments.
                  We don't have it!`,
  },
  {
    faIcon: faBookReader,
    title: 'Portfolio Manager',
    description: `A portfolio manager is a person or group of people responsible for
                  investing a mutual, exchange-traded or closed-end fund's assets,
                  implementing its investment strategy. We don't have it!`,
  },
  {
    faIcon: faPencilAlt,
    title: 'Tax  & Custodial',
    description: `No idea what this is, a google search did not turn out much.
                  Anyway do not worry we don't have this either!`,
  },
];

const InfoIconsSection = () => {
  return (
    <section className="info-icons-section">
      {infoDetails.map((item) => (
        <InfoIconItem key={item.title} {...item} />
      ))}
    </section>
  );
};

export default InfoIconsSection;
