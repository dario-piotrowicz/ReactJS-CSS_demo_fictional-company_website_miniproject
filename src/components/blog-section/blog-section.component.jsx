import React from 'react';
import './blog-section.styles.scss';
import blogImg from '../../assets/images/home/blog.jpg';
import ContentTextPreview from '../content-text-preview/content-text-preview.component';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="content">
        <ContentTextPreview
          subtitle="January 1 1970"
          title="Blog Post One"
          description="Super amazing blog post about something super
          amazing! Do you want to read something super amazing?
          check out our amazing blog post!"
          buttonText="Read Our Blog"
          buttonLinkTo="/blog"
          className="content"
        />
      </div>
      <div className="image">
        <img src={blogImg} alt="people" />
      </div>
    </section>
  );
};

export default BlogSection;
