import React from 'react';
import './App.scss';
import Header from '../src/components/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.page.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>PAGE NOT FOUND</h1>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
