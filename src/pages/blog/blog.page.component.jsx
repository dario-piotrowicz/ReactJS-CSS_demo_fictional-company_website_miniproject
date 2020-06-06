import React from 'react';
import './blog.styles.scss';
import Hero from '../../components/hero/hero.component';
import blog1 from '../../assets/images/blog/blog1.jpg';
import blog2 from '../../assets/images/blog/blog2.jpg';
import blog3 from '../../assets/images/blog/blog3.jpg';
import BlogPreview from '../../components/blog-preview/blog-preview.component';

const blogPreviewsData = [
  {
    imageSrc: blog1,
    title: 'This is a great website',
    author: 'John',
    date: new Date(2020, 1, 20),
    description: `I just wanted to congratulate our devs team to make this
    gorgeous website, I have even heard that it was made using react without
    CRA and that babel and webpack were manually set, that I think is something
    pretty cool.`,
    linkTo: '/',
  },
  {
    imageSrc: blog2,
    title: 'Bloggy Blog',
    author: 'She',
    date: new Date(2020, 1, 23),
    description: `I am not sure what to say, I was just tasked to make a blog post but
    I was not even told what is was supposed to be about. Anyway I hope you got
    that this company does not actually exist.`,
    linkTo: '/',
  },
  {
    imageSrc: blog3,
    title: 'I love Coffee!',
    author: 'Coffee Guy',
    date: new Date(2020, 2, 24),
    description: `Did I tell you that I love coffee? I am starting an initialive to
    raise awareness of the fact that I do love coffee, coffee is great and gives you
    energy! Who doesn't like coffee! Am I right?`,
    linkTo: '/',
  },
];

const Blog = () => (
  <>
    <Hero isBlog />
    <main>
      {blogPreviewsData.map((blog, idx) => (
        <BlogPreview
          key={`${blog.author} ${blog.date}`}
          {...blog}
          blogStyle={idx % 2}
        />
      ))}
    </main>
  </>
);

export default Blog;
