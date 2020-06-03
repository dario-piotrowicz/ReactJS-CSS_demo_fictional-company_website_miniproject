import React from 'react';
import './content-text-preview.styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ContentTextPreview = ({
  subtitle,
  title,
  description,
  buttonText,
  buttonLinkTo,
}) => {
  return (
    <div className="content-text-preview">
      <h4>{subtitle}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link className="btn" to={buttonLinkTo}>
        <FontAwesomeIcon className="fa-icon" icon={faChevronRight} />
        {buttonText}
      </Link>
    </div>
  );
};
ContentTextPreview.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLinkTo: PropTypes.string.isRequired,
};

export default ContentTextPreview;
