import React from 'react';
import './home.styles.scss';
import Hero from '../../components/hero/hero.component';
import InfoIconsSection from '../../components/info-icons-section/info-icons-section.component';
import SolutionsSection from '../../components/solutions-section/solutions-section.component';
import CasesSection from '../../components/cases-section/cases-section.component';
import BlogSection from '../../components/blog-section/blog-section.component';
import TeamSection from '../../components/team-section/team-section.component';

const Home = () => (
  <main>
    <Hero />
    <InfoIconsSection />
    <SolutionsSection />
    <CasesSection />
    <BlogSection />
    <TeamSection />
  </main>
);

export default Home;
