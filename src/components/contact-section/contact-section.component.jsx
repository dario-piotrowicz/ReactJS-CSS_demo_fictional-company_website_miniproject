import React, { useState } from 'react';
import './contact-section.styles.scss';
import PropTypes from 'prop-types';

const FormControl = ({ name, type }) => {
  const nameCaptalized = name.charAt(0).toUpperCase() + name.slice(1);
  const inputId = `contact-section-form-control-${name}`;
  const inputType = type ? type : 'text';
  return (
    <div className="form-control">
      <label htmlFor={inputId}>{nameCaptalized}</label>
      <input
        type={inputType}
        id={inputId}
        name={`contact-form-control-${name}`}
        placeholder={`Enter ${name}`}
      />
    </div>
  );
};
FormControl.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const ContactSection = () => {
  const [attemp, setAttempt] = useState(false);

  if (attemp) {
    setTimeout(() => {
      setAttempt(false);
    }, 2000);
  }

  return (
    <section className="contact-section">
      <div className="image">
        <img
          className="placeholder"
          src="./images/home/contact.jpg"
          alt="placeholder"
        />
        <img
          className="not-implemented"
          src="./images/home/contact-not-implemented.jpg"
          alt="contact not implemented"
        />
        <img
          className={`standard ${attemp ? 'attempt' : ''}`}
          src="./images/home/contact.jpg"
          alt="contact"
        />
      </div>
      <div className="content">
        <h2>Request something!</h2>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            setAttempt(true);
          }}
        >
          <FormControl name="name" />
          <FormControl name="email" type="email" />
          <FormControl name="phone" />
          <input type="submit" value="Send" id="submit" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
