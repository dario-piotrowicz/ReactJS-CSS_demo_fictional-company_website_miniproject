import React from 'react';
import './solutions-section.styles.scss';
import people from '../../assets/images/home/people.jpg';
import ContentTextPreview from '../content-text-preview/content-text-preview.component';

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <div className="image">
        <img src={people} alt="people" />
      </div>
      <div className="content">
        <ContentTextPreview
          subtitle="What you are looking for"
          title="Nothing at all"
          description="Get ready to get no financial support from us.
          We are not willing to go the distance and provide bespoke
          solutions for you. We do not actually do anything. This is
          also just some silly text put here as placeholder text."
          buttonText="Read More"
          buttonLinkTo="/blog/post_about"
          className="content"
        />
      </div>
    </section>
  );
};

export default SolutionsSection;
