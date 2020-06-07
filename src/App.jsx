import React from 'react';
import './App.scss';
import Header from '../src/components/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.page.component';
import Footer from './components/footer/footer.component';
import Blog from './pages/blog/blog.page.component';
import PageNotFound from './pages/page-not-found/page-not-found.page.component';
import 'react-image-lightbox/style.css';

const App = () => {
  return (
    <BrowserRouter basename={document.IndexBrowserRouterBasename}>
      <Header />
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
