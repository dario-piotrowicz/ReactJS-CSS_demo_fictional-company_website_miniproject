import React from 'react';
import './contact-section.styles.scss';
import contact from '../../assets/images/home/contact.jpg';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="image">
        <img src={contact} alt="contact" />
      </div>
      <div className="content">
        <h2>Request something!</h2>
        <form action="">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone"
            />
          </div>
          <input type="submit" value="Send" id="submit" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
