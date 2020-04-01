import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {appRoute} from "../../const.js";
import {connect} from "react-redux";
import {Router, Switch, Route} from "react-router-dom";
import history from "../../history/history";
import PageWithRouter from "../page/page.jsx";
import Main from "../main/main.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import Property from "../property/property.jsx";
import Favorites from "../favorites/favorites.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import withActivePin from "../../hocs/with-active-pin/with-active-pin.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import {
  AuthorizationStatus,
  Operation as UserOperation
} from "../../reducer/user/user";
import {
  getOffers,
} from "../../reducer/data/selectors.js";
import {
  getAuthorizationStatus,
  getAuthorizationInfo,
} from "../../reducer/user/selectors.js";
import {
  getFavoritesPageStatus,
  getPropertyPageStatus,
  getEmptyFavoritesPage,
  getLoginPageStatus,
  getFavorites
} from "../../reducer/main/selectors.js";

const PropertyWithActivePin = withActivePin(Property);
const MainWithActivePin = withActivePin(Main);

class App extends PureComponent {
  render() {
    const {offers, login, favorites, authorizationStatus} = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={appRoute().ROOT}
            render={(props) => {
              return (
                <>
                  {offers.length > 0 && <PageWithRouter {...props}><MainWithActivePin /></PageWithRouter>}
                  {!!offers.length || <PageWithRouter {...props}><MainEmpty /></PageWithRouter>}
                </>
              );
            }}
          />
          <Route
            exact
            path={appRoute().LOGIN}
            render={(props) => {
              return (
                <>
                  {authorizationStatus === AuthorizationStatus.NO_AUTH ? <PageWithRouter {...props}>
                    <AuthScreen
                      onSubmit={login}
                    />
                  </PageWithRouter> : history.go(-1)}
                </>
              );
            }}
          />
          <Route
            exact
            path={appRoute().OFFER}
            render={(props) => {
              return (
                <PageWithRouter {...props}>
                  <PropertyWithActivePin {...props} />
                </PageWithRouter>
              );
            }}
          />
          <PrivateRoute
            exact
            path={appRoute().FAVORITES}
            render={(props) => {
              return (
                <>
                  {favorites.length > 0
                    ? <PageWithRouter {...props}>
                      <Favorites />
                    </PageWithRouter>
                    : <PageWithRouter {...props}>
                      <FavoritesEmpty />
                    </PageWithRouter>}
                </>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  favoritesPage: PropTypes.bool.isRequired,
  emptyFavoritesPage: PropTypes.bool.isRequired,
  loginPage: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object,
  login: PropTypes.func.isRequired,
  propertyPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  favorites: getFavorites(state),
  favoritesPage: getFavoritesPageStatus(state),
  emptyFavoritesPage: getEmptyFavoritesPage(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  loginPage: getLoginPageStatus(state),
  propertyPage: getPropertyPageStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
