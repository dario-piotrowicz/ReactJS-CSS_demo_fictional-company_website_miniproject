import React from 'react';
import './contact-section.styles.scss';
import contactImg from '../../assets/images/home/contact.jpg';
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
  return (
    <section className="contact-section" id="contact">
      <div className="image">
        <img src={contactImg} alt="contact" />
      </div>
      <div className="content">
        <h2>Request something!</h2>
        <form action="">
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
