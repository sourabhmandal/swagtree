import React, { FC, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import CartPage from './Pages/Seller/CartPage';
import CheckoutPage from './Pages/Seller/CheckoutPage';
import HomePage from './Pages/Seller/HomePage';
import ProductPage from './Pages/Seller/ProductPage';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  UserProfile,
} from '@clerk/clerk-react';
import ThemeProvider from './context/ThemeContext';
import WishlistProvider from './context/WishlistContext';
import ActiveCartProvider from './context/ActiveCartContex';
import CatalogProvider from './context/CatalogContext';

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

console.log(clerkFrontendApi);
const App: FC<{}> = (props) => {
  return (
    <ThemeProvider>
      <Router>
        <RouterWithHistory>
          <Switch>
            <Route path='/sign-in/(.*)?'>
              <SignIn routing='path' path='/sign-in' />
            </Route>
            <Route path='/sign-up/(.*)?'>
              <SignUp routing='path' path='/sign-up' />
            </Route>
            <Route exact path={'/product'} component={ProductPage} />
            <PrivateRoute path='/user/'>
              <UserProfile routing='path' path='/user' />
            </PrivateRoute>

            <PrivateRoute
              exact
              path={'/dashboard/'}
              component={DashboardPage}
            />
            <PrivateRoute exact path={'/checkout'} component={CheckoutPage} />

            <PrivateRoute exact path={'/cart'} component={CartPage} />
            <CatalogProvider>
              <Route path={'/'} component={HomePage} />
            </CatalogProvider>
            <Route>
              <div>No route found</div>
            </Route>
            {/* Catch-all route will render if no other route renders */}
            {/* <Route>
              <SignedIn>
                <UserButton />
                <HomePage />
                <div>You are signed in. You can access both routes.</div>
                <Navigation />
              </SignedIn>
              <SignedOut>
                <div>You are signed out. You can access the public route.</div>
                <Navigation />
              </SignedOut>
            </Route> */}
          </Switch>
        </RouterWithHistory>
      </Router>
    </ThemeProvider>
  );
};

function PrivateRoute(props: any) {
  // If the route matches but the user is not signed in, redirect to /sign-in
  return (
    <>
      <SignedIn>
        <Route {...props} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function Navigation() {
  return (
    <ul>
      <li>
        <Link to='/'>Public route</Link>
      </li>
      <li>
        <Link to='/dashboard'>Private route</Link>
      </li>
    </ul>
  );
}

function RouterWithHistory(props: any) {
  const { push } = useHistory();
  return (
    <ClerkProvider frontendApi={clerkFrontendApi} navigate={(to) => push(to)}>
      {props.children}
    </ClerkProvider>
  );
}

export default App;
