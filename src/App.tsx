import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import CartPage from './Pages/Seller/CartPage';
import HomePage from './Pages/Seller/HomePage';
import ProductPage from './Pages/Seller/ProductPage';

const App: FC<{}> = (props) => {
  return (
    <Router>
      <Switch>
        {/* login signup */}
        <Route exact path={'/dashboard/'} component={DashboardPage} />
        <Route exact path={'/product'} component={ProductPage} />
        <Route exact path={'/checkout'} component={ProductPage} />
        <Route exact path={'/cart'} component={CartPage} />
        <Route exact path={'/'} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
