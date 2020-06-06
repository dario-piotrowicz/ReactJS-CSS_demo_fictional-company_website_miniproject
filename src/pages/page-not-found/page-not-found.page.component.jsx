import React from 'react';
import './page-not-found.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => (
  <main id="page-not-found">
    <FontAwesomeIcon className="fa-icon" icon={faExclamationCircle} size="6x" />
    <h1>The page you tried to reach seems not to exist</h1>
  </main>
);

export default PageNotFound;
