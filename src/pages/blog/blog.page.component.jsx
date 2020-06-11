import React, { createContext, useEffect, lazy } from 'react';
import './blog.styles.scss';
import Hero from '../../components/hero/hero.component';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import blogPostsData from './blog-posts-data';

const Post = lazy(() => import('../post/post.page.component'));

export const BlogPostsContext = createContext([]);

const Blog = () => {
  const match = useRouteMatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window, match]);

  return (
    <Switch>
      <Route exact path={match.path}>
        <Hero isBlog />
        <main>
          {blogPostsData
            .sort((postA, postB) => postB.date.getTime() - postA.date.getTime())
            .map((post, idx) => (
              <BlogPreview
                key={`${post.postId}`}
                {...post}
                blogStyle={idx % 2}
              />
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
