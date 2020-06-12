import React, { useContext } from 'react';
import './post.styles.scss';
import Hero from '../../components/hero/hero.component';
import { useParams } from 'react-router-dom';
import { BlogPostsContext } from '../blog/blog.page.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  const { postId } = useParams();
  const posts = useContext(BlogPostsContext);

  const post = posts.find((post) => post.postId === postId);

  if (!post) {
    return (
      <>
        <Hero isBlog title="POST NOT FOUND" />
        <main className="post-not-found">
          <FontAwesomeIcon
            className="fa-icon"
            icon={faExclamationCircle}
            size="6x"
          />
          <h1>The post you tried to reach seems not to exist</h1>
        </main>
      </>
    );
  }

  const { title, author, date, imageSrcFromImages, paragraphs } = post;
  const dateStr = date.toDateString();
  return (
    <>
      <Hero isBlog />
      <main className="post">
        <h2>{title}</h2>
        <p className="meta">
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
          <span>
            Posted by <strong>{author}</strong> | {dateStr}{' '}
          </span>
        </p>
        <img src={`./images/${imageSrcFromImages}`} alt="post" />
        {paragraphs.map((paragraph, idx) => (
          <p className="inner" key={idx}>
            {paragraph}
          </p>
        ))}
      </main>
    </>
  );
};

export default Post;
