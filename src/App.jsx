import React, { lazy, Suspense } from 'react';
import './App.scss';
import Header from '../src/components/header/header.component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import 'react-image-lightbox/style.css';

const Home = lazy(() => import('./pages/home/home.page.component'));
const Blog = lazy(() => import('./pages/blog/blog.page.component'));
const PageNotFound = lazy(() =>
  import('./pages/page-not-found/page-not-found.page.component')
);

const App = () => {
  return (
    <HashRouter basename={document.IndexBrowserRouterBasename}>
      <Header />
      <Suspense fallback={<div id="empty-page" />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </HashRouter>
  );
};

export default App;
