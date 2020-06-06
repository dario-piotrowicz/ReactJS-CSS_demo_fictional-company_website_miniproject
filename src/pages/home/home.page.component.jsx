import React, { useEffect } from 'react';
import './home.styles.scss';
import Hero from '../../components/hero/hero.component';
import InfoIconsSection from '../../components/info-icons-section/info-icons-section.component';
import SolutionsSection from '../../components/solutions-section/solutions-section.component';
import CasesSection from '../../components/cases-section/cases-section.component';
import BlogSection from '../../components/blog-section/blog-section.component';
import TeamSection from '../../components/team-section/team-section.component';
import ContactSection from '../../components/contact-section/contact-section.component';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window]);

  return (
    <main>
      <span id="home" />
      <Hero />
      <InfoIconsSection />
      <span className="anchor-span" id="about" />
      <SolutionsSection />
      <span className="anchor-span" id="cases" />
      <CasesSection />
      <span className="anchor-span" id="blog" />
      <BlogSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default Home;
