import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../../components/ProtectedRout";
import { SemiProtectedRoute } from "../../components/SemiProtectedRoute";
import AdressEditPage from "../AdressEditPage";
import AdressRegisterPage from "../AdressRegisterPage";
import CartPage from "../CartPage";
import FeedPage from "../FeedPage";
import LoginPage from "../LoginPage";
import ProfileEditPage from "../ProfileEditPage";
import ProfilePage from "../ProfilePage";
import RestaurantPage from "../RestaurantPage";
import SearchPage from "../SearchPage";
import SignupPage from "../SignupPage";



export const routes = {
  login: '/login',
  signup: '/signup',
  adressRegister: '/adressRegister',
  feed: '/',
  search: '/search',
  restaurant: '/restaurant',
  profile: '/profile',
  profileEdit: '/profileEdit',
  adressEdit: '/adressEdit',
  cart: '/cart'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={() => <LoginPage />} />
        <Route exact path={routes.signup} component={() => <SignupPage />} />

        <SemiProtectedRoute exact path={routes.adressRegister} component={() => <AdressRegisterPage />} />

        <ProtectedRoute exact path={routes.feed} component={() => <FeedPage />} />
        <ProtectedRoute exact path={routes.search} component={() => <SearchPage />} />
        <ProtectedRoute exact path={routes.restaurant} component={() => <RestaurantPage />} />
        <ProtectedRoute exact path={routes.profile} component={() => <ProfilePage />} />
        <ProtectedRoute exact path={routes.profileEdit} component={() => <ProfileEditPage />} />
        <ProtectedRoute exact path={routes.adressEdit} component={() => <AdressEditPage />} />
        <ProtectedRoute exact path={routes.cart} component={() => <CartPage />} />

        <Route path='*' component={() => 'Página não encontrada'} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
