import React, { createContext } from 'react';
import './blog.styles.scss';
import Hero from '../../components/hero/hero.component';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Post from '../post/post.page.component';
import blogPostsData from './blog-posts-data';

export const BlogPostsContext = createContext([]);

const Blog = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path}>
        <Hero isBlog />
        <main>
          {blogPostsData.map((post, idx) => (
            <BlogPreview key={`${post.postId}`} {...post} blogStyle={idx % 2} />
          ))}
        </main>
      </Route>
      <Route path={`${match.path}/:postId`}>
        <BlogPostsContext.Provider value={blogPostsData}>
          <Post />
        </BlogPostsContext.Provider>
      </Route>
    </Switch>
  );
};

export default Blog;
